//-16-03-2026
//promise topic 
let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Order delivered");
    } else {
        reject("Order failed");
    }
});
myPromise.then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
})
