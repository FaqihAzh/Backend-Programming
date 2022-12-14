//SOLUSI 1 MEMAKAI CALLBACK FUNCTION//
const persiapan = () => {
    console.log("Mempersiapkan Bahan......");
};

const rebusAir = () => {
    console.log("Merebus Air.....");
};

const masak = () => {
    console.log("Memasak Mie......");
    console.log("dan taraaaa,Selesai!");
};

const main = () => {
    setTimeout(()=> {
        callback();
        setTimeout(()=> {
            callback();
            setTimeout(()=> {
                callback();
                setTimeout(()=> {
                    callback();
                    setTimeout(()=> {
                        callback();
                        setTimeout(()=> {
                            callback();
                            setTimeout(()=> {
                                callback();
                                setTimeout(()=> {
                                    callback();
                            },4000);
                        },5000);
                    },2000);
                },3000);
            },1000);
        },4000);
    },2000);
},3000);
};

main();

