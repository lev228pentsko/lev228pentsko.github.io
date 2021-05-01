function getCartProducts(){
    let cart = JSON.parse( localStorage.getItem('cart') );

    if(cart == null){
        cart = []
    }
    return cart;
}

function showProdsNum(){
    document.getElementById('prod_in_card').innerHTML = `(${getCartProducts().length})`;
}
showProdsNum();