const puppeteer = require('puppeteer');

async function startBrowser() {
    let browser;

    try {
        console.log('start browser');
        browser = await puppeteer.launch({
            'headless' : false,
            args:  ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });
    } catch (error) {
        console.error("Could not create a browser instance => : ", error);
    } finally {
        return browser;
    }

}

module.exports = {
    startBrowser
}