// require("dotenv").config(); //dot env

const path = require("path");
const express = require("express");
const cors = require("cors");
const PORT = 3005;
const app = express();

//Cohere requirements
console.log('KuUGZnMPt1xOu89Lsb9s72Z3TG5Bh8Nff3fG986T')
const cohere = require("cohere-ai");
cohere.init('KuUGZnMPt1xOu89Lsb9s72Z3TG5Bh8Nff3fG986T');

//Twilio requirements
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
  });


app.get("/api/sentiment-analysis", async (req, res) => {

    const response = await cohere.classify({
      model: 'f1aeace0-4292-466e-9695-0a04c16948da-ft',
      inputs: ["Pantene Shampoo for Dry Hair, Daily Moisture Renewal, Safe for Color-Treated Hair, 530 mL"]
    });
    // console.log(JSON.stringify(response.body.classifications[0].prediction));
    console.log(response.body.classifications[0].prediction);
    res.json(response.body.classifications[0].prediction)

  })

app.get("/api/search", async (req, res) => {
  
    // API to extract search results by page according to a given keyword (1st page of results)
    const keywordResults = {
        method: 'GET',
        url: 'https://amazon-web-scraping-api.p.rapidapi.com/products/search',
        params: { criteria: "Shampoo", page: '1', countryCode: 'CA', languageCode: 'EN' },
        headers: {
        'X-RapidAPI-Key': '50d928d747mshe8499f4023b1fdfp1a84c6jsna17e28836eee',
        'X-RapidAPI-Host': 'amazon-web-scraping-api.p.rapidapi.com'
        }
    };

    axios.request(keywordResults).then(function (response3) {
    let data = JSON.stringify(response3.data);
    fs.writeFileSync('search.json', data);
    }).catch(function (error) {
    console.error(error);
    });

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
    console.log("here");
    res.send(sortArr());
}) 

// API to get Activities
app.get("/api/keyword", async (req, res) => {
    let productExamples = [
        ["Razor", "Gillette Venus Extra Smooth Swirl Women's Razor - 1 Handle + 4 Refills, Purple"],
        ["Beanie", "Womens Knit Pom-pom Beanie"],
        ["shampoo", "Dove Intensive Repair Shampoo with Bio-Nourish Complex revives damaged hair 750 ml"],
        ["Workout Set", "Workout Set Women 2 Piece Activewear Clothes Seamless"],
        ["Yoga Pants", "Womens Yoga Pants Seamless High Waist Butt Push up Tummy"],
        ["Hoodie", "Big Girls' Fleece Zip-up Hoodie"],
        ["Colored Pencils", "72 Colored Pencils，Quality Coloring Pencils for Adult Coloring Artists Professionals and Colorists, Soft Core, Sketching Drawing Pencils Set Art Supplies for Kid Beginners"],
        ["Eletric Kettle", "COSORI Electric Kettle 1.7L, 1500W Wide Opening Glass Tea Kettle & Hot Water Boiler, Stainless Steel Filter And Inner Lid, LED Indicator Auto Shut-Off & Boil-Dry Protection, Cordless, BPA Free, Black"],
        ["Air Conditioner Fan", "Portable Air Conditioner Fan, Evaporative Air Cooler with 70°Oscillating, 4 Wind Speed 1-8H Timer, 4 IN 1 Personal Air Conditioner Cooling Fan for Individual"],
        ["Soap Dispenser Trio", "AUMIO Chamber Soap Dispenser Trio Shower Gel Shampoo Conditioner with 3x350ml Refillable Bottles ABS Wall Mount Black"],
        ["Lenovo Think Pad", 'Lenovo ThinkPad T490 14.0 FHD (1920x1080) 250 nits IPS Anti-Glare Display - Intel Core i5-8265U Processor, 16GB RA"'],
        ["Tablet", "Kinstone Android 12 Octa-core Tablet PC 10.1 inch, 8GB+256GB, 8000mAh 2.0GHz Fast Gaming Tablet, 4G LTE Tablets, 1920x1200 FHD IPS, 13MP Camera, 2.4G+5G WiFi, Bluetooth 5.0 Type-C, Metal Frame-Silver"]
        ]
    // res.send({productExamples});

    const makePrompt = function(example, examples, example_labels, labels, task_desciption, example_prompt){
        const newExamples = [...examples, example];
        const newLabels = [...example_labels, ""];
        let prompt = task_desciption;

        for (let i = 0; i < newExamples.length; i++) {
            prompt += `\n---\n${newExamples[i]}\n${example_prompt}${newLabels[i]}`;
        }
        return prompt;
    };
  
  const prompt = makePrompt("Pantene Shampoo for Dry Hair, Daily Moisture Renewal, Safe for Color-Treated Hair, 530 mL", productExamples.map((e) => e[1]), productExamples.map(e => e[0]), [], "", "extract the movie title from the post:");
  const extraction = await cohere.generate({
      model: 'command-medium-nightly',
      prompt: prompt,
      max_tokens: 10,
      temperature: 0.1,
      stop: "\n"
    });
  console.log(extraction["body"]["generations"][0].text.trim())
  // console.log(`Prediction: ${extraction.body}`);
  res.json(extraction["body"]["generations"][0].text.trim());
});

// app.use()
