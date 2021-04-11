function drawCards(){
    const cards_num = document.querySelector('#cards_num').value;
    const cards     = document.querySelector('#cards');

    let cards_html = ``;

    for( i = 0; i < cards_num; i++ ){
        cards_html +=
        `
        <div class="card">
		  <div class="card-body my-2">
			<h5 class="card-title">Card ${i + 1}</h5>
		  </div>
		</div>
        `
    }

    cards.innerHTML = cards_html;

}

let order = 1;

function color(){
    const cards = document.querySelectorAll('.card');
    const cards_text = document.querySelector('#cards_text').value;

    cards.forEach( function(card, index){
        if((index + 1) % order === 0 ){
        card.style.color = cards_text;
        }
    } )
}

function fon(){
    const cards = document.querySelectorAll('.card');
    const cards_fon = document.querySelector('#cards_fon').value;

    cards.forEach( function(card, index){
        if((index + 1) % order === 0 ){
        card.style.background = cards_fon;
        }
    } )
    
}

function changeOrder(){
    order = document.querySelector('#edit_order').value;
}

function deleteCards(){
    const cards = document.querySelector('#cards');

    cards.innerHTML = ``;
}

function clearCards(){
    const cards = document.querySelectorAll('.card');

    cards.forEach( function(card){
        card.removeAttribute('style')
    } )

    document.querySelector('#cards_text').value = 'black';
    document.querySelector('#cards_fon').value = 'transparent';
}