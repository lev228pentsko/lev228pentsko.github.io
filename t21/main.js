function drawCard(){
    const card_num   = document.getElementById('card_num').value;
    const card_color = document.getElementById('card_color').value;
    const card_bg    = document.getElementById('card_bg').value;

    const card = document.getElementById(`card_${card_num}`);

    card.style.color      = card_color;

    card.style.background = card_bg;
}