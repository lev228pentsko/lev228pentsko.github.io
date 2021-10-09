console.log("t3")

function saveArticle(){
    const article = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        text: document.getElementById('text').value
    }

    if(
        article.title.length == 0 ||
        article.author.length == 0 ||
        article.text.length == 0
        ) { alert('Поле не заповнене!'); return }
    
        db.collection("articles").add(article).then( function(){
            getAllArticles();
        })

    console.log(article);
}

    const articles = [];

    function getAllArticles(){
        db.collection("articles").get().then( function(res){
            res.forEach( function(doc){       
                const article = doc.data();
                articles.push(article);
            });
            
            alert(`Title added.${articles.length} - articles saved`)
        })
    }


