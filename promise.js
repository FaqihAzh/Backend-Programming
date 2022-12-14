//membuat fungsi download
//@returns{object} Promise

const download = () => {
    //promise dibuat menggunakan class promise
    //menerima callback funtion/executor
    // executor menerima 2 params : resolve dan reject
    //resolve ketika berhasil
    //reject ketika gagal
    return new Promise((resolve,reject)=>{
        const status = true;

        setTimeout(()=>{
            if(status) {
                resolve("Download selesai");
            }else{
                reject("Download gagal");
            }
        },5000);
    });
};

console.log(download());