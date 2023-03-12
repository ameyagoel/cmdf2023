
const cohere = require("cohere-ai");
const prodsearch = require("./prodsearch");

// calls prodsearch function
var title = prodsearch.extractTitle();

cohere.init('KuUGZnMPt1xOu89Lsb9s72Z3TG5Bh8Nff3fG986T');

async function getData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
(async () => {
    const response = await cohere.classify({
      model: 'f1aeace0-4292-466e-9695-0a04c16948da-ft',
      inputs: [title]
    });
    console.log(title);
    console.log(JSON.stringify(response.body.classifications[0].prediction));
    return JSON.stringify(response.body.classifications[0].prediction);
  })();

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

const makePrompt = function(example, examples, example_labels, labels, task_desciption, example_prompt){
    const newExamples = [...examples, example];
    const newLabels = [...example_labels, ""];
    let prompt = task_desciption;

    for (let i = 0; i < newExamples.length; i++) {
      prompt += `\n---\n${newExamples[i]}\n${example_prompt}${newLabels[i]}`;
    }
    return prompt;
};

var example = "Samsung Galaxy Tab A7 lite 32GB Mystic Grey";


(async () => {
    const prompt = makePrompt(example, productExamples.map((e) => e[1]), productExamples.map(e => e[0]), [], "", "extract the movie title from the post:");
    const extraction = await cohere.generate({
      model: 'command-medium-nightly',
      prompt: prompt,
      max_tokens: 10,
      temperature: 0.1,
      stop: "\n"
    });
    console.log(extraction["body"]["generations"][0].text.trim())
    return extraction["body"]["generations"][0].text.trim();
  })()

