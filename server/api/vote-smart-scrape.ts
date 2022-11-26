console.log('hello')

// const By = webdriver.By; // useful Locator utility to describe a query for a WebElement
// driver.navigate().to("Yahoo")
// .then(() => driver.findElement(By.css("#login-username")))
// .then((element:any)=> element.getAttribute("value"))
// .then((value:any)=> console.log(value));

const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

const votesmart_url = 'https://justfacts.votesmart.org/';

const candidate_name = 'Rafael Warnock';

interface ProfileJSON {
    [key: string]: any;
}


let jsonData: ProfileJSON = {};
    let service = new chrome.ServiceBuilder(chromedriver.path).build();
    let options = new chrome.Options();
    let driver = chrome.Driver.createSession(options, service);


    // driver.get(votesmart_url);
    // console.log(driver.getCurrentUrl());
    // let search_bar = driver.findElement(driver.By.id("ispysearch"));
    // search_bar.sendKeys(candidate_name, driver.Key.ENTER);
    // console.log(driver.getCurrentUrl()));
    driver.get(votesmart_url)
    // .then(() => driver.getCurrentUrl())
    // .then((res:any) => console.log(res))
    .then(() => driver.findElement(webdriver.By.id("ispysearch")))
    .then((res:any) => {
        res.sendKeys(candidate_name, webdriver.Key.ENTER)
    });
    // .then((res:any) => res.getCurrentUrl())
    // .then((res:any) => console.log(res));
// export default async function findCandidateUrl() {
    
// }


// driver.quit()



// import webdriver from 'selenium-webdriver';
// import chrome from 'selenium-webdriver/chrome';
// import chromedriver from 'chromedriver';

// chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

// var driver = new webdriver.Builder()
//                  .withCapabilities(webdriver.Capabilities.chrome())
//                  .build();