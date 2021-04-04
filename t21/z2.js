function changeCard(id){
    const card = document.getElementById(id);

    if( card.classList.contains('bg-red') && card.classList.contains('yellow')){
        card.classList.remove('bg-red');
        card.classList.remove('yellow');
    }else{
        card.classList.add('bg-red');
        card.classList.add('yellow');
    }
}

