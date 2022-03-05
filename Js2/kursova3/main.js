document.addEventListener('DOMContentLoaded', async function(){   

    //Витягуємо темплейти
    let home = await axios.get("templates/home.html");
    let login = await axios.get("templates/login.html");

    //Основна інформація для spa (сайту)
    const data =  {
        message: 'Hello Vue.js!',
        currentPath: window.location.hash,
    };

    //Компоненти
    const Home = {
        template: home.data,
    };

    const Login = {
        template: login.data,
        methods: {
        googleAuth(){
            console.log("click");

            firebase.auth()
            .signInWithPopup(provider)
            .then( result => {
                console.log(result)
                const user = result.user;

                const new_user = {
                    displayName: user. displayName,
                    email: user.email,
                    photo: user.photoURL

                };

                console.log(new_user);
            })
            .catch( error => {
                console.log(error)
            }); 
        }}
    };


    //Роути
    const routes = {
        '/': Home,
        '/home': Home,
        '/login': Login
    }

    const app = {
        data() {  return data },
        methods: {
           
        },
        components: { },
        computed: {
            currentView() {
                return routes[this.currentPath.slice(1) || '/'] || Home
            }
        },
        mounted() {
            window.addEventListener('hashchange', () => {
                this.currentPath = window.location.hash
            })
        }
    }
    Vue.createApp(app).mount('#app');
})