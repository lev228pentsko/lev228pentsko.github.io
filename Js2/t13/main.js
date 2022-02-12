document.addEventListener('DOMContentLoaded', async function(){
    let text = await axios.get("templates/test.html");
    
    const data = {
        products: [
            {
                url: "https://talant.shop/static/items/2019/November/5dbc31ea8c52ab6209a6d122-medium.jpg",
                name: "Футболки",
                count: 1,
                color: "#fff",
                price: 20,
                preOrder: false,
                delivery: false,
                totalPrice: 20
            },
            {
                url: "https://megasport.ua/ua/image/products/164034209961c5a25316ebe5.69240951-62fde3c.jpeg",
                name: "Штани",
                count: 1,
                color: "#fff",
                price: 25,
                preOrder: false,
                delivery: false,
                totalPrice: 25
            }
        ]
    }
    const CardTemplate = {
        props: ['product'],
        template: text.data,
        methods: {
            couuntTotalPrice(){
                let allPrice = this.product.count * this.product.price;
                let preOrder = 0;
                let delivery = 0;
                if(this.product.preOrder){

                    preOrder = (allPrice*(1/20))

                }
                if(this.product.delivery){

                    delivery = allPrice/10;

                }

                this.product.totalPrice = allPrice - preOrder + delivery;
            }
        }
    }
    const app = {
        data(){
            return data
        },
        components: {
            'card': CardTemplate
        },
        methods: {},        
    }
    Vue.createApp(app).mount('#app')
})