function getProduct() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { title: 'Macbook pro', price: 150000 },
                { title: 'iphone 17 pro max', price: 100000 }
            ]);
        }, 2500);
    });
}

getProduct().then(products => {
    console.log(products);
});