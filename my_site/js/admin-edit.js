constadmin = JSON.parse( localStorage.getItem('admin') );

if( admin != true ){
    window.location = "index.html";
}


function addProduct(){
    const product = {
        name:  document.getElementById('name').value,
        photo: document.getElementById('photo').value,
        count: document.getElementById('count').value,
        price: document.getElementById('price').value
    }



    const products = storageGet("products") || [];

    products.push(product);

    storageSave("products", products)

    displayMessage('message_info', 'Admin', 'Товар додано', 4000);

    name:  document.getElementById('name').value = '';
    photo: document.getElementById('photo').value = '';
    count: document.getElementById('count').value = "";
    price: document.getElementById('price').value = "";
}

