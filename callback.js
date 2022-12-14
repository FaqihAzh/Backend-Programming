//fungsi untuk format nama menjadi upper case
//@param{string}name
function formatName(name){
    const result = name.toUpperCase();
    return result;
}


//fungsi untuk mendapatkan nama
//@param{string}name
//@param{function}callback
function getName(name,callFormatName){
    const result = callFormatName(name);
    console.log(result);
}

getName("Annisa Maulida",formatName);