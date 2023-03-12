const ps = require("./prodsearch")
const cks = require("./cohereKeySelector");

const main = function (url) {
    ps.getURL(url);
    var title = ps.extractTitle();
    // console.log(title);
    cks.setTitle(title);
    var keyword = cks.getKeyword();
    ps.getSearch(keyword);
}

main('https://www.amazon.ca/l-f-Cosmetics-Velvety-Lightweight-Pigmented/dp/B08T7CY6JC?ref_=Oct_d_otopr_d_6344654011_0&pd_rd_w=YLB5h&content-id=amzn1.sym.82af20ba-5740-4c9b-a454-3a929a6ac813&pf_rd_p=82af20ba-5740-4c9b-a454-3a929a6ac813&pf_rd_r=4K1DXZ3261S88WHWARZB&pd_rd_wg=zu6pG&pd_rd_r=400192e4-d3bc-430c-a84c-8d225ad49db5&pd_rd_i=B08T7CY6JC')