const allOrders = [
	{
		product: "Монітор Sony 8764d",
		price: 2430,
		type: 'монітор'
	},
	{
		product: "Клавіатура Rizen 1905b",
		price: 1350,
		type: 'клавіатура'
	},
	{
		product: "Монітор Samsung 187b",
		price: 3240,
		type: 'монітор'
	},
	{
		product: "Роутер від Asus 094g",
		price: 1080,
		type: 'роутер'
	},
	{
		product: "Клавіатура Rizen 2705c",
		price: 1215,
		type: 'клавіатура'
	},
	{
		product: "Клавіатура 1905b",
		price: 1242,
		type: 'клавіатура'
	},
	{
		product: "Монітор Sony 8764d",
		price: 2160,
		type: 'монітор'
	},
	{
		product: "Монітор Samsung 734s",
		price: 4860,
		type: 'монітор'
	},
	{
		product: "Роутер від Asus 091g",
		price: 810,
		type: 'роутер'
	},
	{
		product: "Клавіатура Rizen 1905b",
		price: 1566,
		type: 'клавіатура'
	},
	{
		product: "Монітор Samsung 187b",
		price: 2700,
		type: 'монітор'
	},
	{
		product: "Роутер від Asus 094g",
		price: 1242,
		type: 'роутер'
	},
];

function showOrders(arr, cur){
const orders_table = document.getElementById("orders_table");

let orders = ``;

arr.map( function(el, index){
    orders +=
    `
    <tr>
	    <td>${index + 1}</td>
	    <td>${el.product}</td>
	    <td>${el.type}</td>
	    <td>${el.price} ${cur}</td>
	</tr>
    `
} );

    orders_table.innerHTML = orders;

}

let currency = "UAH";

function changePricing(cur){

    if( cur == "UAH" && currency == "USD"){
        console.log("UAH")
        currency = "UAH";
        
        const allOrders_2 = allOrders.map( function(el){
            el.price = el.price * 27;
            return el 
        })
        showOrders(allOrders_2, "UAH");const sum = allOrders.reduce( function(acc, el){
            return acc += el.price


           
            
           }, 0)
           document.getElementById("result").innerHTML = `Загалом витрачено - ${sum} UAH`
           
    }
    if( cur == "USD" && currency == "UAH"){
        console.log("USD")
        currency = "USD"
        const allOrders_2 = allOrders.map( function(el){
            el.price = el.price / 27;
            return el 
        })
        showOrders(allOrders_2, "USD");

        const sum = allOrders_2.reduce( function(acc, el){
            return acc += el.price
           
            
           }, 0)
           document.getElementById("result").innerHTML = `Загалом витрачено - ${sum} USD`
    }

}

function filterOrders(){
    const type_filter = document.getElementById("type_filter").value;

    const arr_2 = allOrders.filter( function(el){
        return el.type == type_filter;
    } );

    showOrders( arr_2, currency );

}

showOrders( allOrders, "UAH" );

const sum = allOrders.reduce( function(acc, el){
 return acc += el.price

 
}, 0)
document.getElementById("result").innerHTML = `Загалом витрачено - ${sum} UAH`