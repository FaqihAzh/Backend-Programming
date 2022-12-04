/**
 * TODO 3:
 * - Import fruits dari fruit.js.
 * - Refactor variable ke ES6 variable
 */
const fruits = require("./fruits.js");

// TODO 4: Buat method Index
const index = () => {
  for (const fruit of fruits) {
    console.log(fruit);
  }
};

// TODO 5: Buat method Store
const store = (name) => {
  fruits.push(name);
  index();
};

// TODO 6: Buat method Update
const update = (id, name) => {};
// TODO 7: Buat method Destroy

/**
 * TODO 8:
 * - Export semua method.
 */
module.exports = { index, store };
