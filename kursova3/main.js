document.addEventListener('DOMContentLoaded', async function(){   

    //Витягуємо темплейти
    let home = await axios.get("templates/home.html");
    let login = await axios.get("templates/login.html");

    //Основна інформація для spa (сайту)
    const data =  {
        message: 'Hello Vue.js!',
        currentPath: window.location.hash,
        user: {},
        signIn: true,
        logged: false,
    };

    //Компоненти
    const Home = {
        template: home.data,
    };

    const Login = {
        template: login.data,
        props: ['signIn'],
        methods: {
            googleAuth(){
                console.log("click");

                firebase.auth()
                .signInWithPopup(provider)
                .then( result => {
                    console.log(result)
                    const user = result.user;

                    const new_user = {
                        displayName: user.displayName,
                        email: user.email,
                        photo: user.photoURL

                    };
                    data.user = new_user;
                    data.logged = true;
                    this.$root.$forceUpdate();
                    window.location.hash = "/home";

                    console.log(new_user);
                })
                .catch( error => {
                    console.log(error)
                }); 
            },
            signUpWithPassword(){
                console.log('signUpWithPassword');

                const email = document.getElementById("user-email").value;
                const password = document.getElementById("user-password").value;
                console.log(email);
                console.log(password);

                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    var user = userCredential.user;

                    const new_user = {
                        displayName: user.displayName,
                        email: user.email,
                        photo: user.photoURL

                    };
                    data.user = new_user;
                    data.logged = true;
                    this.$root.$forceUpdate();
                    window.location.hash = "/home";

                    console.log(new_user);               
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                });
            },
            signInWithPassword(){
                const email = document.getElementById("user-email").value;
                const password = document.getElementById("user-password").value;
                console.log(email);
                console.log(password);

                firebase.auth().signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    var user = userCredential.user;

                    const new_user = {
                        displayName: user.displayName,
                        email: user.email,
                        photo: user.photoURL
                    };
                    data.user = new_user;
                    data.logged = true;
                    this.$root.$forceUpdate();
                    window.location.hash = "/home";

                    console.log(new_user);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                });
            }
        }
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
           logOut(){
            firebase.auth().signOut().then(() => {
                data.logged = false;
                this.$forceUpdate();
                window.location.hash = "#/login";
            }).catch((error) => {
                  console.log(error);
            });
           }
        },
        components: { },
        computed: {
            currentView() {
                return routes[this.currentPath.slice(1) || '/'] || Home
            }
        },
        mounted(){
            window.addEventListener('hashchange', () => {
                this.currentPath = window.location.hash
            })
        }
    }
    Vue.createApp(app).mount('#app');
})