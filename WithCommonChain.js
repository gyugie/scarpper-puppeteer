
async function get(browserInstance, scrapperProcess){

    try {
        browser = await browserInstance;

        await scrapperProcess.login(browser);
        await scrapperProcess.fetch(browser);
        await scrapperProcess.logout(browser);
        await scrapperProcess.breforeScript(browser);
        await scrapperProcess.afterScript(browser);
        
        response = await scrapperProcess.results();
        console.log(response);
    } catch (error) {
        console.error("Could not resolve the browser instance => ", error);
    }
}

module.exports = (browserInstance, scrapperProcess) => get(browserInstance, scrapperProcess);