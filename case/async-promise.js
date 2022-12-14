const persiapan = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Persiapan");
        },3000);
    });
};

const rebusAir = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Merebus Air");
        },7000);
    });
};

const masak = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("memasak Mie....& tara mie sudah matang");
        },5000);
    });
};

const main = () => {
    persiapan().then((res)=>{
        console.log(res);
        return rebusAir();
    }).then((res)=> {
        console.log(res);
        return masak();
    }).then((res) => {
        console.log(res)
    });
    
}

main();