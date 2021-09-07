"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const XmlParser_1 = require("./XmlParser");
let pools = XmlParser_1.XmlParser.loadPools(fs.readFileSync('assets/itempools.xml', 'utf8'));
let meta = XmlParser_1.XmlParser.loadMeta(fs.readFileSync('assets/items_metadata.xml', 'utf8'));

let list = "local itempools ={";
for (let k = 0; k <= 30; k++) {
    list += ((JSON.stringify(pools[k].items.sort(function(x,y) { return x.id - y.id})).replace("[",`\n{`)).replace("]", "}")).replace("}}", `},}, -- ${pools[k].name}`);
    if (k == 30) {
        list += "\n}";
    }
}
fs.writeFileSync(`src/itempools.txt`, list);

let list2 = "EID.itemWeightsLookup= {\n";
let count = 0;
for (let k = 1; k <= 729; k++) {
    if (meta.get(k)) {
        count++;
        list2 += `[${k}]=${JSON.stringify(meta.get(k))},`;
        if (count % 23 == 0) {
            list2 += "\n";
        }
        else {
            list2 += " ";
        }
        if (k == 729) {
            list2 += "\n}";
        }
    }
}
fs.writeFileSync(`src/items_metadata.txt`, list2);