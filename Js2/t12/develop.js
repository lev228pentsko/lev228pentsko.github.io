const products = [
    {
        id: 0,
        name: "Google Pixel 4 XL 64GB Black",
        url: "https://content1.rozetka.com.ua/goods/images/big/24330840.jpg",
        display: "6.3",
        camera: "8 Мп",
        acc: "3700",
        price: "14 290"
    },
    {
        id: 1,
        name: "Google Pixel 4 XL 64GB Black",
        url: "https://content1.rozetka.com.ua/goods/images/big/24330840.jpg",
        display: "6.3",
        camera: "8 Мп",
        acc: "3700",
        price: "14 290"
    },
    {
        id: 2,
        name: "Google Pixel 4 XL 64GB Black",
        url: "https://content1.rozetka.com.ua/goods/images/big/24330840.jpg",
        display: "6.3",
        camera: "8 Мп",
        acc: "3700",
        price: "14 290"
    },
    {
        id: 3,
        name: "Google Pixel 4 XL 64GB Black",
        url: "https://content1.rozetka.com.ua/goods/images/big/24330840.jpg",
        display: "6.3",
        camera: "8 Мп",
        acc: "3700",
        price: "14 290"
    },
    {
        id: 4,
        name: "Google Pixel 4 XL 64GB Black",
        url: "https://content1.rozetka.com.ua/goods/images/big/24330840.jpg",
        display: "6.3",
        camera: "8 Мп",
        acc: "3700",
        price: "14 290"
    },
    {
        id: 5,
        name: "Google Pixel 4 XL 64GB Black",
        url: "https://content1.rozetka.com.ua/goods/images/big/24330840.jpg",
        display: "6.3",
        camera: "8 Мп",
        acc: "3700",
        price: "14 290"
    },
    {
        id: 6,
        name: "Google Pixel 4 XL 64GB Black",
        url: "https://content1.rozetka.com.ua/goods/images/big/24330840.jpg",
        display: "6.3",
        camera: "8 Мп",
        acc: "3700",
        price: "14 290"
    },
    {
        id: 7,
        name: "Google Pixel 4 XL 64GB Black",
        url: "https://content1.rozetka.com.ua/goods/images/big/24330840.jpg",
        display: "7.3",
        camera: "5 Мп",
        acc: "3900",
        price: "10 000"
    }
    
]

function addProductsToFirebase(products){
       products.forEach(element => {
           db.collection('products')
           .add(element)
           .then(res => console.log('success'))
       });
}
addProductsToFirebase(products);

