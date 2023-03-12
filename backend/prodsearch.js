const axios = require("axios");

// TODO: Invalid input and/or incomplete URL handling
// get url from user input -- front end
var getURL = 'https://www.amazon.ca/amazon-fire-tv-43-inch-omni-series-4k-smart-tv/dp/B08T6LD72Q/?_encoding=UTF8&_ref=dlx_gate_sd_dcl_tlt_5ddbb14d_dt&pd_rd_w=Cw25Q&content-id=amzn1.sym.90127122-574c-4a62-9877-f68107060e76&pf_rd_p=90127122-574c-4a62-9877-f68107060e76&pf_rd_r=4823JQTSB9Z758H0DYV6&pd_rd_wg=PtM66&pd_rd_r=846e2c7a-8ce0-4dec-ba7a-6b8d2c90686a&ref_=pd_gw_unk';

// split url string according to the character '/' to extract individual strings to an array
const splitURL = function(a) {
  var url = a;
  var path = url.split( '/' );
  return path;
}

// isolate domain from the url array, ex: 'www.xyz.com' -> 'com'
const extractDomain = function(a) {
  var path = splitURL(a);
  var domain = path[2].split('.')[2];
  return domain;
}

// isolate ASIN or Amazon ID from url array at the 5th position in a valid amazon URL
const extractASIN = function(a) {
  var path = splitURL(a);
  var asin = path[5];
  return asin;
}

// API to extract detailed information about a product from the input URL including title, price, etc
const prodInfo = {
  method: 'GET',
  url: 'https://amazon-pricing-and-product-info.p.rapidapi.com/',
  params: {asin: extractASIN(getURL), domain: extractDomain(getURL)},
  headers: {
    'X-RapidAPI-Key': '50d928d747mshe8499f4023b1fdfp1a84c6jsna17e28836eee',
    'X-RapidAPI-Host': 'amazon-pricing-and-product-info.p.rapidapi.com'
  }
};

// const extractTitle = function() {
  // return prodInfo.responseData;
// }

// console.log(extractTitle());

// console log prodInfo title
axios.request(prodInfo).then(function (response) {
	console.log(response.data.responseData.title);
}).catch(function (error) {
	console.error(error);
});

// console log prodInfo title
axios.request(prodInfo).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

// API to extract search results by page according to a given keyword (x 15)
const keywordResults = {
  method: 'GET',
  url: 'https://amazon-web-scraping-api.p.rapidapi.com/products/search',
  params: {criteria: 'AMD Ryzen', page: '1', countryCode: 'US', languageCode: 'EN'},
  headers: {
    'X-RapidAPI-Key': '50d928d747mshe8499f4023b1fdfp1a84c6jsna17e28836eee',
    'X-RapidAPI-Host': 'amazon-web-scraping-api.p.rapidapi.com'
  }
};

// console log keywordResults
axios.request(keywordResults).then(function (response3) {
	console.log(response3.data.products[0].image);
}).catch(function (error) {
	console.error(error);
});
