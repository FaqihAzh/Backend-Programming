/**
 * TODO 9:
 * - Import semua method FruitController
 * - Refactor variable ke ES6 variable
 *
 * @hint - Gunakan Destructing Object
 */
const { index, store } = require("./FruitController.js");

/**
 * NOTES:
 * - Fungsi main tidak perlu diubah
 * - Jalankan program: node app.js
 */
const main = () => {
  index();
  store("Melon");
};

main();
