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


//asycronus await
const main = async() => {
    console.log(await persiapan());
    console.log(await rebusAir());
    console.log(await masak());
};

main();