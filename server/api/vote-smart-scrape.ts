import { json } from "node:stream/consumers";

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const votesmart_url = 'https://justfacts.votesmart.org/';

interface ProfileJSON {
    [key: string]: any;
}

export default async function findCandidateID(candidate_name: String) {
    let jsonData: ProfileJSON = {};
    let service = new chrome.ServiceBuilder(chromedriver.path).build();
    let options = new chrome.Options();
    options.headless = true;
    let driver = chrome.Driver.createSession(options, service);

    await driver.get(votesmart_url)
    .then(() => driver.findElement(webdriver.By.id("ispysearch")))
    .then((res:any) => {
        res.sendKeys(candidate_name, webdriver.Key.ENTER)
    })
    // NEED TO wait for 5 seconds
    .then(() =>  sleep(5000))
    .then(() => driver.findElements(webdriver.By.className("iSpy-dropdown-item")))
    // currently just use the first candidate after searching
    .then(async (candidates : any) => (candidates[0].getAttribute('id')))
    .then(async (id:any) => {
        let candidate_name_split = candidate_name.split(" ");
        let first = candidate_name_split[0].toLowerCase();
        let last = candidate_name_split[candidate_name_split.length - 1].toLowerCase();
        let name_voting_record = first + "-" + last;
        console.log(id);
        jsonData["url"] = "https://justfacts.votesmart.org/candidate/key-votes/" + id + "/" + name_voting_record;
        console.log(jsonData["url"]);
    })
    .then(() => driver.quit())
    console.log(jsonData.url);
    return jsonData;
}

