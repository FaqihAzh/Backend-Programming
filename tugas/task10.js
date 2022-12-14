//fungsi untuk menampilkan hasil download
//@param {string} result - nama file yang diunduh

const tampilUnduhan = (result) => {
    console.log("Unduhan Selesai");
    console.log("Hasil Unduhan : " +result);
}

//fungsi untuk download file
//@param{function} callback - function callback show

const download = (calltampilUnduhan) => {
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const result = "Hasil Unduhan: Mongodb-compass"
            const status = true;
            (status)?resolve(result) : reject ("Unduhan Gagal");
        },7000);
    });
}

//cara promise 

// download()
// .then((result)=>{
//     return tampilUnduhan(result);
// }).catch((err) => {
//     console.log(err);
// });

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */

//Menggunakan asyncronus await

async function main(){
    console.log(await download());
}

main();