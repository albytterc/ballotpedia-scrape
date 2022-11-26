import * as cheerio from "cheerio";
import axios, {AxiosError, AxiosResponse} from "axios";

const baseURL = "https://ballotpedia.org/index.php?search=";

interface ProfileJSON {
    [key: string]: any;
}

interface QueryParams {
    [key: string]: any;
}

// Only need to clean the string for candidate names
export default async function parseHTML(query: string, params: QueryParams, performClean: boolean) {
    const jsonData: ProfileJSON = {};
    if (performClean) {
        query = cleanQuery(query)
    }

    const searchURL = new URL(baseURL + query).href;

    await axios
    .get(searchURL)
    .then((resp: AxiosResponse) => {
        // check here if the url redirected to an actual article
        // handle search results page
        const responseURL = new URL(resp.request.res.responseUrl).href;
        if (searchURL === responseURL) {
            return parseSearchResults(query, resp);
        }
        return resp;
    })
    .then(async (resp: AxiosResponse) => {
        let $ = cheerio.load(resp.data);

        // check if not right page
        if (!$('head > title').text().toLowerCase().includes(query.toLowerCase())) {
            const match = $('.mw-parser-output a').filter((i, elem) => {
                const queryPattern = new RegExp(`${query.split(" ").join(".*")}`, 'i');
                return !!$(elem).text().match(queryPattern);
            }).first();

            let matchLink;
            if (match) {
                matchLink = match.attr('href');
            }

            if (!matchLink) {
                throw new Error("No link found for entry");
            }
            const getFixedLink = getListEntryURL(matchLink);
            const articleResp = await axios.get(getFixedLink);
            $ = cheerio.load(articleResp.data);
        }

        // check if disambiguation page
        // use candidate's state to determine which it is
        if ($(".mw-parser-output table#disambig").length || $('.mw-parser-output table.dmbox-disambig').length) {
            const candidateList = $('.mw-parser-output > ul li a');
            const stateMatch = candidateList.filter((i, elem) => {
                return $(elem).text().toLowerCase().includes(params.state.toLowerCase());
            });

            let entryHref;
            const firstEntryLink = $(".mw-parser-output > ul li a").attr("href");
            if (stateMatch.length) {
                entryHref = stateMatch.attr('href');
            } else {
                entryHref = firstEntryLink;
            }

            if (!entryHref) {
                throw new Error("No link found for entry");
            }
            const linkFixed = getListEntryURL(entryHref);
            const articleResp = await axios.get(linkFixed);
            $ = cheerio.load(articleResp.data);
        }

        const [bp_name, summary, bio, profilePic, contactInfo] = await Promise.all([getBallotpediaName($), getSummary($), getBio($), getProfilePic($), getContactInfo($)]);
        jsonData["name"] = query;
        jsonData["ballotpedia_name"] = bp_name;
        jsonData["summary"] = summary;
        jsonData["bio"] = bio;
        jsonData["picture"] = profilePic;
        jsonData["contactInfo"] = contactInfo;
    })
    .catch((error: AxiosError | Error) => {
        throw error;
        // if (axios.isAxiosError(error)) {
        //     throw error;
        // } else {
        //     throw new Error("Non-axios error")
        // }
    });
    return jsonData;
}

function getBallotpediaName($: cheerio.CheerioAPI) {
    return $('#firstHeading').text();
}

function getSummary($: cheerio.CheerioAPI) {
    const children = $(".mw-parser-output").children();
    let bio = "";
    for (let i = 0; i < children.length; i++) {
        if (!$(children[i]).is("p") && bio.trim()) break;

        const hasStyleChild = $(children[i]).children().is("style");
        if ($(children[i]).is("p") && !hasStyleChild) {
            // console.log("i: " + i + " " + $(children[i]).text())
            bio += $(children[i]).text();
        }
    }
    return cleanBio(bio);
    // console.log("SUMMARY: " + bio)
}

function getBio($: cheerio.CheerioAPI) {
    const bio = $("#Biography")?.parent().nextUntil("h2", "p").text();
    return cleanBio(bio);
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

function cleanBio(text: string) {
    text = text.replace(/\[\d*]/gi, ""); // removes citations, e.g. [1]
    const singleNewline = /(?<!\n)\n(?!\n)/g; // matches single newlines to replace them with two newlines
    text = text.replace(singleNewline, "\n\n")
    return text.replace(/[^\S\r\n]\1+/g, " ").trim(); // matches extra spaces excluding newlines
}

function parseSearchResults(query: string, response: AxiosResponse) {
    const $ = cheerio.load(response.data);

    // check if no results were found
    if ($(".mw-search-nonefound").length) {
        throw new Error("No results found for " + query);
    }

    // select from search results
    // try selecting first one
    const firstResultLink = $(
        "ul.mw-search-results li.mw-search-result div.mw-search-result-heading a"
    ).attr("href");
    // const firstResult = searchResults.children().
    if (!firstResultLink) {
        throw new Error("No results found for " + query);
    }
    const sourceURL = getListEntryURL(firstResultLink);

    return axios.get(sourceURL);
}

function getListEntryURL(_url: string) {
    let sourceURL = "";
    if (_url?.startsWith("/")) {
        sourceURL = "https://ballotpedia.org" + _url;
    } else if (_url?.startsWith("http")) {
        sourceURL = _url;
    }

    return sourceURL;
}

function cleanQuery(query: string) {
    query = query.replace(/(\w*\.)+ /g, ''); // remove abbreviations in names
    query = query.replace(/\b\w\b /, ""); // removes single letters

    // remove quotes
    query = query.replace(/"/g, "");
    query = query.replace(/'/g, "");

    const parts = query.split(" ");
    if (parts.length > 1)
        return parts[0] + " " + parts[parts.length - 1]; // returns first name and last name

    return query;

}

// let html = getHTML("stacey abrams");
