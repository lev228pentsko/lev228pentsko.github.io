const data = {
    new_author: "",
    new_comment_text: "",
    comments: [
        {
            id: 0,
            author: "Lev",
            text: "Test text"
        }
    ]
}

const CommentTemplate = {
    props: ['comment'],
    template: 
    `
    <div class="card">
    <div class="row">
        <div class="col-1 userlogo_box">
            <div class="username">
                {{comment.author[0]}}
            </div>
        </div>
        <div class="col-11">
            <h5>{{comment.author}}</h5>
            <p>
            {{comment.text}}
            </p>
        </div>
    </div>
</div>
    `
}

const app = {
    data(){
        return data
    },
    components: {
        CommentTemplate
    },
    methods: {
        saveComment(){
            console.log(db);
            db.collection("comments").add({
                author: this.new_author,
                text: this.new_comment_text
            }).then(() => this.drawComments() )
        },
        drawComments(){
            
        }
    }
}

Vue.createApp(app).mount('#app')