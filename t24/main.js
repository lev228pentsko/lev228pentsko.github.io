function drawCards(products){
    const cards = document.getElementById('cards');
    let cards_html = ``;
    console.log(products);

    products.forEach( function(product){
        let action = '';
        if(product.action){ action = `<div class="action">Акція</div>` }
        cards_html += 
        `
    <div class="card">
        ${action}
        <img src="${product.image}" class="card-img-top">
        <div class="card-body">
            <h6 class="card-title">${product.name}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>Виробник:</b> <span>${product.developer}</span></li>
                <li class="list-group-item"><b>Відгуків:</b> <span>${product.reviews}</span></li>
                <li class="list-group-item"><b>Ціна:</b> <span>${product.price}₴</span></li>
            </ul>
        </div>
        <div class="card-body price">
            <a href="#" class="card-link">В корзину</a>
            <a href="#" class="card-link">Придбати</a>
          </div>
    </div>
        `;
    } );

    cards.innerHTML = cards_html;
}

function findDevelopers(){
    let developers = [];

    phones.forEach( function(phone){
        if(!developers.includes(phone.developer)){
            developers.push(phone.developer)
        }
    });

    const datalistOptions = document.getElementById('datalistOptions');
    let options = ``;

    developers.forEach( function(dev){
        options += `<option value="${dev}">`
    })
    datalistOptions.innerHTML = options;
  
}

function getFilter(){
    let filter = JSON.parse( localStorage.getItem('filter') ) ;
    if(filter === null){
        filter = {};
    }
    return filter;
}

function saveFilter(){
    const newFilter = {
        product_name: document.getElementById('product_name').value,
        product_developer: document.getElementById('product_developer').value,
        product_min: document.getElementById('product_min').value,
        product_max: document.getElementById('product_max').value,
        product_sort: document.getElementById('product_sort').value
    }
    localStorage.setItem('filter', JSON.stringify(newFilter));
    filterProducts();
}

function filterProducts(){
    const filter = getFilter();
    let new_products = phones;

    if(filter.product_name.length > 0){
        new_products = new_products.filter( function(product){
            return product.name.includes(filter.product_name)
        } );
    }
    if(filter.product_developer.length > 0){
        new_products = new_products.filter( function(product){
            return product.developer === filter.product_developer
        } );
    }
    if(filter.product_min > 0){
        new_products = new_products.filter( function(product){
            return product.price >= filter.product_min
        } );
    }
    if(filter.product_max > 0){
        new_products = new_products.filter( function(product){
            return product.price <= filter.product_max
        } );
    }
    if(filter.product_sort == "price"){
        new_products = new_products.sort( function(a, b){
            return a.price - b.price
        } );
    }
    if(filter.product_sort == "reviews"){
        new_products = new_products.sort( function(a, b){
            return a.reviews - b.reviews
        } );
    }

    drawCards(new_products);
}
filterProducts();
getFilter();    
findDevelopers();
drawCards(phones);