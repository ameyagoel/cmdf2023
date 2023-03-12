const axios = require("axios");
const fs = require("fs");
// const cohere = require('cohere-ai');
// cohere.init('KuUGZnMPt1xOu89Lsb9s72Z3TG5Bh8Nff3fG986T'); // This is your trial API key
// (async () => {
//   const response = await cohere.classify({
//     model: 'f1aeace0-4292-466e-9695-0a04c16948da-ft',
//     inputs: ["<YOUR_INPUTS>"]
//   });
//   console.log(`The confidence levels of the labels are ${JSON.stringify(cresponse.body.classifications)}`);
// })();

// TODO: Invalid input and/or incomplete URL handling
// get url from user input -- front end
var getURL = 'https://www.amazon.ca/Gillette-Venus-ComfortGlide-Scented-Refills/dp/B001JQLNFA/ref=sr_1_31?crid=2Z7OE9Y35QEPR&keywords=razor&qid=1678601115&s=beauty&sprefix=raz%2Cbeauty%2C648&sr=1-31';
var searchLimit = 4;
var searchBar = 'razor';

// split url string according to the character '/' to extract individual strings to an array
const splitURL = function (a) {
  var url = a;
  var path = url.split('/');
  return path;
}

// isolate domain from the url array, ex: 'www.xyz.com' -> 'com'
const extractDomain = function (a) {
  var path = splitURL(a);
  var domain = path[2].split('.')[2];
  return domain;
}

// isolate ASIN or Amazon ID from url array at the 5th position in a valid amazon URL
const extractASIN = function (a) {
  var path = splitURL(a);
  var asin = path[5];
  return asin;
}

// API to extract detailed information about a product from the input URL including title, price, etc
// const prodInfo = {
//   method: 'GET',
//   url: 'https://amazon-pricing-and-product-info.p.rapidapi.com/',
//   params: { asin: extractASIN(getURL), domain: extractDomain(getURL) },
//   headers: {
//     'X-RapidAPI-Key': '50d928d747mshe8499f4023b1fdfp1a84c6jsna17e28836eee',
//     'X-RapidAPI-Host': 'amazon-pricing-and-product-info.p.rapidapi.com'
//   }
// };

// write prodInfo to JSON (product.json)
// axios.request(prodInfo).then(function (response) {
//   let data = JSON.stringify(response.data);
//   fs.writeFileSync('product.json', data);
// }).catch(function (error) {
//   console.error(error);
// });

// API to extract search results by page according to a given keyword (1st page of results)
// const keywordResults = {
//   method: 'GET',
//   url: 'https://amazon-web-scraping-api.p.rapidapi.com/products/search',
//   params: { criteria: searchBar, page: '1', countryCode: 'CA', languageCode: 'EN' },
//   headers: {
//     'X-RapidAPI-Key': '50d928d747mshe8499f4023b1fdfp1a84c6jsna17e28836eee',
//     'X-RapidAPI-Host': 'amazon-web-scraping-api.p.rapidapi.com'
//   }
// };

// console log keywordResults
// axios.request(keywordResults).then(function (response3) {
//   let data = JSON.stringify(response3.data);
//   fs.writeFileSync('search.json', data);
// }).catch(function (error) {
//   console.error(error);
// });

const extractTitle = function() {
  let json = fs.readFileSync('product.json');
  let obj = JSON.parse(json);
  return obj.responseData.title;
};

const extractPrice = function() {
  let json = fs.readFileSync('product.json');
  let obj = JSON.parse(json);
  return obj.responseData.soldByAmazonPrice;
};

console.log(extractTitle());
console.log(extractPrice());

const sortArr = function() {
  let json = fs.readFileSync('search.json');
  let obj = JSON.parse(json);
  let prods = obj.products.sort(function(a,b){ 
    var x = a.price.currentPrice < b.price.currentPrice? -1:1; 
    return x;});
  return prods;
}

const extractTitleArray = function() {
  let obj = sortArr();
  let len = obj.length;
  var titles = [];
  for(i = 0; i < searchLimit; i++) {
    titles.push(obj[i].name);
  }
  return titles;
}

const extractPrices = function() {
  let obj = sortArr();
  let len = obj.length;
  var prices = [];
  for(i = 0; i < searchLimit; i++) {
    prices.push(obj[i].price.currentPrice);
  }
  return prices;
}

const extractImgURL = function() {
  let obj = sortArr();
  let len = obj.length;
  var img = [];
  for(i = 0; i < searchLimit; i++) {
    img.push(obj[i].image.url);
  }
  return img;
}

console.log(sortArr());
console.log(extractTitleArray());
console.log(extractPrices());
console.log(extractImgURL());