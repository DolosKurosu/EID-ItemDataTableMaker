# isaac-bagofcrafting2
Generates a lua table to replace EID's Bag of Crafting Itempools table and/or EID.itemWeightsLookup table. 

Note: The itempools.xml was taken from Item Pools Rework mod to use for testing. 

## How To Use
1) Open this project folder on VSCode.
2) Replace the itempools.xml and/or item-metadata.xml in the `assets` folder if generating recipes for another mod.
3) Go to index.js in the `src` folder, and press `CTRL` + `SHIFT` + `grave` to open up a terminal.
4) Type `npm install` to install all dependencies for the project.
5) Type `node src/itemdatatoluatable.js` in the console and press `ENTER`.
