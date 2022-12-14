//arrow function diguunakan untuk mengembalikan satu nilai
//arrow function sering digunakan di javascript

const formatName = (name) => name.toUpperCase();

const getName = (name,callFormatName) => console.log(callFormatName(name));

getName("Nis",formatName);