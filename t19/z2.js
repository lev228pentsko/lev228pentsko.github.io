const all_products = document.getElementById('all_products');

function saveCard(){
    let cards = JSON.parse(localStorage.getItem("cards"));
    
    if(cards === null){
        cards = []
    }

    const card = {
        name :     document.getElementById("name").value,
        photo :    document.getElementById("photo").value,
        reviews :  document.getElementById("reviews").value,
        price :    document.getElementById("price").value
    } 
    
    cards.push(card);

    localStorage.setItem("cards", JSON.stringify(cards));
    drawCards();
}

function drawCards(){
    let cards = JSON.parse(localStorage.getItem("cards"));
    
    if(cards === null){
        cards = []
    }

    let cards_html = ``;

    cards.map( function(card, index){
        cards_html +=`<div class="card">
                        <div class="header">           
                        </div>        
                        <div class="card_image">
                            <img src="${card.photo}" alt="">
                        </div>        
                        <div class="card_info">
                            <div class="name">
                                ${card.name}
                            </div>            
                            <div class="reviews">
                            ${card.reviews} відгуків
                            </div>           
                            <div class="price">
                            ${card.price} &#8372;
                            </div>
                        </div>
                    </div>`
    } )
    all_products.innerHTML = cards_html;
}

drawCards();