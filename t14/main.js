document.addEventListener('DOMContentLoaded', async function(){   

    let home = await axios.get("templates/home.html");
    let notfound = await axios.get("templates/404.html");   
    let orders = await axios.get("templates/orders.html");
    let products = await axios.get("templates/products.html");
    

    const data =  {
        message: 'Hello Vue.js!',
        currentPath: window.location.hash,
        orders: [],
        products: []
    };

    const Home = {
        template: home.data,
    };

    const NotFound = {
        template: notfound.data
    };

    const Orders = {
        template: orders.data,
        props: ['orders']
    };

    const Products = {
        template: products.data,
        props: ['products']
    };

    const routes = {
        '/': Home,
        '/home': Home,
        '/products': Products,
        '/orders': Orders,
        '/not-found': NotFound,

    }

    const app = {
        data() {  return data },
        methods: { 
            getOrders(){
                db.collection('orders')
                .get()
                .then( res => {
                    res.forEach( element =>{
                        console.log(element);
                        this.orders.push(element.data());
                    });
                } )
            },
            getProducts(){
                db.collection('products')
                .get()
                .then( res => {
                    res.forEach( element =>{
                        console.log(element);
                        this.products.push(element.data());
                    });
                } )
            }
        },
        components: { },
        computed: {
            currentView() {
                return routes[this.currentPath.slice(1) || '/'] || NotFound
            }
        },
        mounted() {
            window.addEventListener('hashchange', () => {
                this.currentPath = window.location.hash
            })
            this. getOrders();
            this. getProducts();
        }
    }
    Vue.createApp(app).mount('#app');
})