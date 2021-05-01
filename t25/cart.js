function drawCards(){

const cart = getCartProducts();
let cards_html = ``;
let sum = 0;

cart.forEach( function(phone, index){
    sum += phone.price;
    cards_html +=
    `
    <tr>
        <th scope="row">${index + 1}</th>
        <td>
            <img src="${phone.image}" class="cart-img">
        </td>
        <td>${phone.name}</td>
        <td>${phone.price}₴</td>
        <td class="text-center"><button class="btn btn-danger" onclick="deletePhone(${index})">x</button></td>
    </tr>
    `
} )

document.getElementById('cart_table').innerHTML = cards_html;
document.getElementById('cart_sum').innerText = sum;
}

drawCards();
function deletePhone(index){
    const cart = getCartProducts();
    cart.splice(index, 1);
    localStorage.setItem( 'cart', JSON.stringify(cart) )

    drawCards();
    showProdsNum();
}

