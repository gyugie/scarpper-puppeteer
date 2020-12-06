const scrapperProcess = {
    url: 'https://mib.bankmandiri.co.id',
    data: [],
    async login(browser){
        let page = await browser.newPage();
        await page.goto(this.url);
        console.log(await page.waitForSelector('body > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td.box_cen > table > tbody > tr:nth-child(1) > td:nth-child(2) > input'));
       
        // element_is_ready = await page.waitForSelector('.corpId');
    },
    async fetch(){
        console.log('ini fetch');
        this.data.push({
            'key'   : 1,
            'value': 'test'
        });
    },
    async logout(){
        console.log('ini logout');

    },
    async breforeScript(){
        console.log('ini before script');
    },
    async afterScript(){
        console.log('ini after script');
    },
    async results(){
        return this.data;
    }

}

module.exports = scrapperProcess;