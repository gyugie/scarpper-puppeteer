const browserObject         = require('./browser');
const withCommonChain       = require('./WithCommonChain');
const scrapperProcess       = require('./MandiriBisnis');


//start browser instance 
let browserInstance = browserObject.startBrowser();

withCommonChain(browserInstance, scrapperProcess);