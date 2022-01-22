const data = {
    message: "Hello vue.js",
    products: ["iPhone 13", "iPhone 14"],
    image: "..." ,
    test: {
        id: 0,
        name: "iPad"
    }
}

const CardTemplate = {
    props: ['product'],
    template: `<p>{{ product.name }}</p>`
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