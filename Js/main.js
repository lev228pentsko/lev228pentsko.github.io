const keyboards = [
    {action: true,
        photo: "k_1.jpg",
        name: "Клавіатура дротова Logitech",
        rewies: 204,
        price: 1199,
    },
    {action: false,
        photo: "k_2.jpg",
        name: "Клавіатура Cougar Vantar",
        rewies: 6,
        price: 1500,
    },
    {action: true,
        photo: "k_1.jpg",
        name: "Клавіатура дротова Logitech",
        rewies: 204,
        price: 1300,
    },
    {action: false,
        photo: "k_2.jpg",
        name: "Клавіатура Cougar Vantar",
        rewies: 6,
        price: 1286,
    },
    {action: true,
        photo: "k_1.jpg",
        name: "Клавіатура дротова Logitech",
        rewies: 204,
        price: 1199,
    },
    {action: false,
        photo: "k_2.jpg",
        name: "Клавіатура Cougar Vantar",
        rewies: 6,
        price: 1286,
    }
];

const products = document.getElementById('products');

let max = keyboards[0].price;

for(i = 0; i < keyboards.length; i++ ){
    if (keyboards[i].price > max ){
        max = keyboards[i].price;
    }
}
console.log(max)

let cards_text = ``;

for( i = 0; i < keyboards.length; i++ ){

    let badge = '';
    let points = 0;

    if( keyboards[i].action == true ){
        badge = '<div class="action">Акція</div>'; 
        points += 100;
    }

    points += keyboards[i].rewies/2;

    let res = max - keyboards[i].price

    points += res;

    cards_text += 
    `
 <div>
    <h2 align="center">${points}</h2>
    <div class="card">
			<div class="header">
            ${badge}
			</div>
			
			<div class="card_image">
				<img src=${keyboards[i].photo} alt="">
			</div>
			
			<div class="card_info">
				<div class="name">
                ${keyboards[i].name}
				</div>
				
				<div class="reviews">
                ${keyboards[i].rewies} відгуки
				</div>
				
				<div class="price">
                ${keyboards[i].price}
				</div>
			</div>
        </div>
</div>
        
    `
}

products.innerHTML = cards_text; 
