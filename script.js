const puppeteer = require('puppeteer');
const fs = require('fs');

// 1. Scraping
async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const html = await page.evaluate(() => {
        let arr = []
        let items = document.querySelectorAll('h4');

        for (var i = 0; i < items.length; i++) {
            arr.push(items[i].innerText.split('\n')[1])
        }
        return arr
    })

    await browser.close();

// 2. write scraped date to a  json file
    fs.writeFile("data.json", JSON.stringify(html), 'utf8', function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The data has been scraped and saved successfully! View it at './data.json'");
    });
}
// 3. Call scrape function with url.
scrapeProduct('https://optimaedu.fi/sv/info-till-dig-som-studerar-vid-optima/frukost-och-lunch-vid-optima-jakobstad')
