const spiner = document.getElementById('spiner');
const list   = document.getElementById('list')
const articles = [];
const nav = document.getElementById('nav')

db.collection("articles").get().then( function(res){
    let index2 = 0;
    spiner.style.display = "none";

    res.forEach( function(doc, index2){
        const article = doc.data();
        articles.push(article);
        drawArticle(article, index);
        DrawMenu(article, index);
        index2++;
    });

    console.log(articles);
});
      
    function drawArticle(data, index){
        const article = document.createElement('article');

        const title = document.createElement('h2');
        const text = document.createElement('div');
        const author = document.createElement('a');

        title.innerHTML  = data.title;
        title.id         = `article_${index}`
        text.innerHTML   = data.article;
        author.innerHTML = 'Bandera official';
        author.href      = data.author;

        article.appendChild(title);
        article.appendChild(text);
        article.appendChild(author);

        list.appendChild(article)
    }
    function DrawMenu(data, index){
       
        const title = document.createElement('a');

     
        title.href       = `#article_${index}`;
        title.innerHTML  = data.title;
        title.style.marginRight = '10px'
        nav.appendChild(title);

    }