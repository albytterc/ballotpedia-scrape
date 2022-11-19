import * as cheerio from "cheerio";
import axios from "axios";
import { end, first } from "cheerio/lib/api/traversing";

const url = "https://ballotpedia.org/index.php?search=";
async function getHTML(query: string) {
    return axios
        .get(url + query)
        .then((resp) => {
            const $ = cheerio.load(resp.data);
            getSummary($);
            return $;
        })
        .then((api) => {
            getBio(api);
            return api;
        })
        .then((api) => {
            getProfilePic(api);
        })
        .catch((error) => console.error(error));
}

async function getSummary($: cheerio.CheerioAPI) {
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
    console.log("SUMMARY: " + bio)
}

async function getBio($: cheerio.CheerioAPI) {
    console.log("BIO: " + $("#Biography").parent().nextUntil("h2").text());
}

async function getProfilePic($: cheerio.CheerioAPI) {
    console.log("PROFILE PIC: " + $('div.infobox img.widget-img')?.attr('src'))
}

let html = getHTML("georgia governor");
