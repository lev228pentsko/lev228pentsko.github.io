const data = {
    message: "Hello vue.js",
    products: [
     {
        id: 0,
        name: "iPhone 13",
        price: 1000,
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS6u4yGN8gUMz5mWAy2jXpZM00HKCZxZ-THRxP6yyuF4uF6SAyGPgubOs8GxdzPsg&usqp=CAc"
     },
     {
        id: 1,
        name: "iPhone 12",
        price: 750,
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSU5Mqkloptfvh4gJX3oT59s2vttcWwHNAzmNrn-gBrUF-JPJEdQlYDvZBxSNumfuEDR302b3UH4e8&usqp=CAc" 
    }
    ] 
}

const CardTemplate = {
    props: ['product'],
    template: 
    `
    <div class="card" style="width: 18rem; margin-right: 10px;">
    <img 
        v-bind:src=product.img
        class="card-img-top" 
        alt="..."
        style="max-height: 300px; width: fit-content;margin: 0 auto;">
    <div class="card-body">
        <h5 class="card-title">{{product.name}}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <p class="d-flex justify-content-between">
          <span>Price:</span>
          <span>{{product.price}}$</span>
        </p>
      <a href="#" class="btn btn-primary">Add to cart</a>
    </div>
</div>

    `
}

const app = {
    data(){
        return data
    },
    components: {
        CardTemplate
    }
}

Vue.createApp(app).mount('#app')