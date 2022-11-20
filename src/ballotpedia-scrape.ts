import * as cheerio from "cheerio";
import axios, { AxiosResponse } from "axios";
import { end, first } from "cheerio/lib/api/traversing";
import { response, NextFunction } from "express";
import url from "node:url";

const baseURL = "https://ballotpedia.org/index.php?search=";

interface ProfileJSON {
    [key: string]: any;
}

export default async function parseHTML(query: string) {
    let json: ProfileJSON = {};
    const searchURL = new URL(baseURL + query).href;
    await axios
        .get(searchURL)
        .then((resp) => {
            // check here if the url redirected to an actual article
            // handle search results page
            const responseURL = new URL(resp.request.res.responseUrl).href;
            if (searchURL === responseURL) {
                return parseSearchResults(query, resp);
            }
            return resp;
        })
        .then((resp) => {
            // handle disambiguation page when there are multiple candidates with same name
            const $ = cheerio.load(resp.data);
            if ($('table#disambig').length || $('table.dmbox-disambig').length) {
                const firstEntryLink = $('.mw-parser-output > ul li a').attr('href');
                if (!firstEntryLink) {
                    throw new Error("No link found for entry");
                }
                const linkFixed = getListEntryURL(firstEntryLink);
                return axios.get(linkFixed);
            }
            return resp;
        })
        .then((resp) => {
            const $ = cheerio.load(resp.data);
            json["summary"] = getSummary($);
            json["bio"] = getBio($);
            json["picture"] = getProfilePic($);
            json["contactInfo"] = getContactInfo($);
        })
        // .catch((error) => next(error));
    return json;
}

function getSummary($: cheerio.CheerioAPI) {
    const children = $(".mw-parser-output").children();
    let bio = "";
    for (let i = 0; i < children.length; i++) {
        if (!$(children[i]).is("p") && bio) break;

        let hasStyleChild = $(children[i]).children().is("style");
        if ($(children[i]).is("p") && !hasStyleChild) {
            // console.log("i: " + i + " " + $(children[i]).text())
            bio += $(children[i]).text();
        }
    }
    return removeCitation(bio);
    // console.log("SUMMARY: " + bio)
}

function getBio($: cheerio.CheerioAPI) {
    let bio = $("#Biography")?.parent().nextUntil("h2").text();
    return removeCitation(bio);
}

function getProfilePic($: cheerio.CheerioAPI) {
    // console.log($('div.infobox img.widget-img') == )
    return $("div.infobox img.widget-img").attr("src");
}

function getContactInfo($: cheerio.CheerioAPI) {
    // const contactInfo = $('div.infobox').find('Contact').contents().nextAll().text();
    return $("div.infobox div p a")
        ?.get()
        .map((elem) => $(elem).attr("href")); //.map((elem) => {$(elem).attr('href')}); /*.children().filter((i, elem) => { */
    // return $(elem).text() === "Contact";
    // return contactHeader;
}

function removeCitation(text: string) {
    return text.replace(/\[\d*\]/gi, "");
}

function parseSearchResults(query: string, response: AxiosResponse) {
    const $ = cheerio.load(response.data);

    // check if no results were found
    if ($('.searchdidyoumean').length || $('.mw-search-nonefound').length) {
        throw new Error("No results found for " + query);
    }

    // select from search results
    // try selecting first one
    const firstResultLink = $('ul.mw-search-results li.mw-search-result div.mw-search-result-heading a').attr("href");
    // const firstResult = searchResults.children().
    if (!firstResultLink) {
        throw new Error("No results found for " + query);
    }
    let sourceURL = getListEntryURL(firstResultLink)

    return axios.get(sourceURL);
}

function getListEntryURL(_url: string) {
    let sourceURL = "";
    if (_url?.startsWith('/')) {
        sourceURL = 'https://ballotpedia.org' + _url;
    } else if (_url?.startsWith('http')) {
        sourceURL = _url;
    }

    return sourceURL;
}
// let html = getHTML("stacey abrams");
