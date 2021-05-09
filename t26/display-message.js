function displayMessage(type, title, message, time){

    let box = document.querySelector('.message_box')

    if(box == null){
        box = document.createElement('div');
        box.classList.add('message_box');
    }

    const content = document.createElement('div');
    content.classList.add('message_content');
    content.classList.add(type);

    const header = document.createElement('div');
    header.classList.add('message_header');
    header.innerText = title;

    const text = document.createElement('div');
    text.classList.add('message_text');
    text.innerText = message;

    const line = document.createElement('div');
    line.classList.add('message_line');

    content.appendChild(header)
    content.appendChild(text)
    content.appendChild(line)
    box.appendChild(content);
    document.body.appendChild(box);

    line.style.width = '100%';
    const diff = 3000 / time;
    let lineMove = setInterval(function(){
        line.style.width = `${Number( line.style.width.replace('%', '') ) - diff}%`

        if( Number( line.style.width.replace('%', '') ) < 1){
            clearInterval(lineMove);
            box.removeChild(content);
        }
    }, 30);
}

//displayMessage('message_success', 'Message header', 'Some message text', 4000);
//message_success
//message_info
//message_warning
//message_error