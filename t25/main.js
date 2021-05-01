const cards = document.getElementById('cards');

let cards_html = ``;

phones.forEach( function(phone, index){
    cards_html +=
    `
    <div class="card">
        <img src="${phone.image}" class="card-img-top">
        <div class="card-body">
            <h6 class="card-title">${phone.name}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>Виробник:</b> <span>${phone.developer}</span></li>
                <li class="list-group-item"><b>Відгуків:</b> <span>${phone.reviews}</span></li>
                <li class="list-group-item"><b>Ціна:</b> <span>${phone.price}₴</span></li>
            </ul>
        </div>
        <div class="card-body price">
          <button class="btn-sm btn-primary" onclick="addToCart(${index})">В корзину</button>
          <button class="btn-sm btn-success">Придбати</button>
          </div>
    </div>
    `
} )
cards.innerHTML = cards_html;

function getCartProducts(){
    let cart = JSON.parse( localStorage.getItem('cart') );

    if(cart == null){
        cart = []
    }
    return cart;
}
function addToCart(index){
    const new_phone = phones[index];
    const cart = getCartProducts();
    cart.push(new_phone);

    localStorage.setItem( 'cart', JSON.stringify( cart ) );

    showProdsNum();
}