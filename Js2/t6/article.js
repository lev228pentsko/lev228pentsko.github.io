const url = new URL(window.location.href);
const article_id = url.searchParams.get('id');

if(article_id){
    getArticle(article_id);
}

function getArticle(article_id){
    db.collection('articles')
    .doc(article_id)
    .get()
    .then( res => {            
                let article = {
                id: res.id,
                ...res.data()
                }
            console.log(article);
            drawArticle(article)           
        })
}

function drawArticle(article){
    const title = document.createElement('h1');
    title.innerText = article.title;

    const article_text = document.createElement('div');
    article_text.innerHTML = article.article;

    const article_body = document.getElementById('article_body');


    article_body.appendChild(title);

    article_body.appendChild(article_text);

    const likes_box = document.createElement('div');
    likes_box.classList.add('d-flex');
    likes_box.classList.add('justify-content-end')

    const likes = document.createElement('div');

    likes.innerHTML = 
    `
    <svg viewBox="0 0 24 24"class="style-scope yt-icon" style="pointer-events: none; display: block; width: 50px; height: 50px;"><g class="style-scope yt-icon"><path d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z" class="style-scope yt-icon"></path></g></svg>
    ${article.likes}
    `;
    likes_box.appendChild(likes);
    article_body.appendChild(likes_box);
}
