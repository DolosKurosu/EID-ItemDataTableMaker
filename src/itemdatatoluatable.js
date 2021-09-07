"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const XmlParser_1 = require("./XmlParser");
let pools = XmlParser_1.XmlParser.loadPools(fs.readFileSync('assets/itempools.xml', 'utf8'));

let list = "itempools ={";
for (let k = 0; k <= 30; k++) {
    list += ((JSON.stringify(pools[k].items.sort(function(x,y) { return x.id - y.id})).replace("[",`\n{`)).replace("]", "}")).replace("}}", `},}, -- ${pools[k].name}`);
    if (k == 30) {
        list += "\n}";
    }
}
fs.writeFileSync(`src/itempooldata.txt`, list);