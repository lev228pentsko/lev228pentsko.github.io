function drawCard(){
    const card_num   = document.getElementById('card_num').value;
    const card_color = document.getElementById('card_color').value;
    const card_bg    = document.getElementById('card_bg').value;
    const card_op    = document.getElementById('card_op').value;
    const card_an    = document.getElementById('card_an').value;

    const card = document.getElementById(`card_${card_num}`);

    card.style.color      = card_color;
    card.style.background = card_bg;
    card.style.opacity    = card_op;
    card.style.animation  = `${card_an} 2s ease infinite`;
}
