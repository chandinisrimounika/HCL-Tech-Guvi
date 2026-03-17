function getUser(){
    return Promise.resolve("Fetch user successfully")
}
function getProducts(){
    return Promise.resolve("Fetch products successfully")
}
function getPayment(){
    return Promise.resolve("Fetch payment successfully")
}

getUser().then(user=>{
    console.log(user)
    return getProducts()
}).then(products=>{
    console.log(products)
    return getPayment()
}).then(payment=>{
    console.log(payment)
    console.log("order placed successfully")
})