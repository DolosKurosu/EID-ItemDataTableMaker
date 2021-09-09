"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const XmlParser_1 = require("./XmlParser");
let pools = XmlParser_1.XmlParser.loadPools(fs.readFileSync('assets/itempools.xml', 'utf8'));
let meta = XmlParser_1.XmlParser.loadMeta(fs.readFileSync('assets/items_metadata.xml', 'utf8'));

let list = "local itempools ={\n";
for (let k = 0; k <= 30; k++) {
    for(let l = 0; l <= pools[k].items.length - 1; l++) {
        if (l == 0) {
            list += "{";
        }
        list += `{${pools[k].items[l].id},${pools[k].items[l].weight}},`;
        if (l == pools[k].items.length - 1) {
            list += `}, -- ${pools[k].name}`;
            if (k != 30) {
                list += "\n"
            }
        }
    }
    if (k == 30) {
        list += "\n}";
    }
}

list += "\n\nEID.itemWeightsLookup= {\n";
let count = 0;
for (let k = 1; k <= 729; k++) {
    if (meta.get(k) != null) {
        count++;
        list += `[${k}]=${JSON.stringify(meta.get(k))},`;
        if (count % 23 == 0) {
            list += "\n";
        }
        else {
            list += " ";
        }
        if (k == 729) {
            list += "\n}";
        }
    }
}
fs.writeFileSync(`src/moddedItemData.lua`, list);