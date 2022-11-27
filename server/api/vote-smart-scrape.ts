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
    let driver = chrome.Driver.createSession(options, service);

    driver.get(votesmart_url)
    // .then(() => driver.getCurrentUrl())
    // .then((res:any) => console.log(res))
    .then(() => driver.findElement(webdriver.By.id("ispysearch")))
    .then((res:any) => {
        res.sendKeys(candidate_name, webdriver.Key.ENTER)
    })
    // NEED TO wait for 5 seconds
    .then(() =>  sleep(5000))
    .then(() => driver.findElements(webdriver.By.className("iSpy-dropdown-item")))
    // currently just use the first candidate after searching
    .then((candidates : any) => candidates[0].getAttribute('id'))
    .then(async (id:any) => {
        jsonData["id"] = id;
        // candidate_id = id;
        console.log(jsonData["id"]);
    })
    .then(() =>  sleep(3000))
    .then(() => driver.quit());
    return jsonData;
}


findCandidateID('Rafael Warnock');
