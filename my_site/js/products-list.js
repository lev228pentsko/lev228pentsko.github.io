const products_table = document.getElementById('products_table');

function drawProducts(){
    const products = storageGet("products") || [];
    let products_html = ``;
    
    products.forEach( function(product, index){
        products_html += 
        `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>
            <img src="${product.photo}" height="100" />
            </td>
            <td>${product.name}</td>
            <td>${product.count}</td>
            <td>${product.price}</td>
            <td>
            <button 
                type="button" 
                class="btn btn-outline-danger btn-sm"
                onclick="deleteProduct(${index})"
            >Видалити</button>
            </td>
        </tr> 
        `
    });

    products_table.innerHTML = products_html;
}

function deleteProduct(index){
    const products = storageGet("products") || [];
    products.splice(index, 1);
    storageSave("products", products);
    drawProducts();
} 

drawProducts();

function saveJSON(){
    let products = storageGet("products") || [];
   
    console.log(JSON.stringify(products));
   }             