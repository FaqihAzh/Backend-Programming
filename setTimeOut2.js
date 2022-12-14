console.log ("Nisa membuka browser firefox");

//set Timeout adalah salah satu operasi asynchronous
//fungsi setTimeOut tidak mencegah operasi selanjutnya
//callback otomatis dijalankan difunction ini

setTimeout(()=>{
    console.log("Downloading sedang berlangsung.....");
    console.log("Download Selesai");
},5000);

console.log("Nisa membuka quora");