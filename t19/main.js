function drawText(){
    const text = document.getElementById('text').value;

    document.getElementById('stored_test').innerText = text;

    localStorage.setItem("text", text);
}

function getText(){
    const text = localStorage.getItem("text");
    document.getElementById('stored_test').innerText = text;
}

function change(){
    const text = localStorage.getItem('text');
    document.getElementById('text').value = text;
}

function delet(){
    localStorage.removeItem('text');
    document.getElementById('text').value = ``;
    document.getElementById('stored_test').innerText = ``;

}


getText();