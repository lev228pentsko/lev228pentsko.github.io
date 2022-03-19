document.addEventListener('DOMContentLoaded', async function(){   

    //Витягуємо темплейти
    let home = await axios.get("templates/home.html");
    let login = await axios.get("templates/login.html");
    let addProduct = await axios.get("templates/addProduct.html");

    //Основна інформація для spa (сайту)
    const data =  {
        message: 'Hello Vue.js!',
        currentPath: window.location.hash,
        user: {},
        signIn: true,
        logged: false,
        admin: false,
        newProduct: {
            name:"",
            imageUrl:"",
            price: 0
        }
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
                    this.checkAdmin(user.email);
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
                    this.checkAdmin(user.email);
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
                    this.checkAdmin(user.email);
                    console.log(new_user);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                });
            },
            checkAdmin(email){
                db.collection("admins")
                .get()
                .then( res => {
                    const adminEmails = [];
                    res.forEach( e => adminEmails.push(e.data().email) );

                    if(adminEmails.includes(email)){
                        data.admin = true;
                        this.$root.$forceUpdate();
                        console.log("welcome admin!");
                    }
                    else if(data.admin == true){
                        data.admin = false;
                        this.$root.$forceUpdate();
                    };
                })
                console.log("check for admin!", email);
            }
        }
    };

    const AddProduct = {
        template: addProduct.data,
        props: ['newProduct'],
        methods: {
            addProductToDB(){
                const newProduct = {
                    name: document.getElementById('product_name').value,
                    url: document.getElementById('product_img').value,
                    price: document.getElementById('product_price').value
                }
                db.collection("products")
                .add(newProduct)
                .then(() => console.log('product added to db'))
            }
        }
    }

    //Роути
    const routes = {
        '/': Home,
        '/home': Home,
        '/login': Login,
        '/addproduct': AddProduct
    }

    const app = {
        data() {  return data },
        methods: {
           logOut(){
            firebase.auth().signOut().then(() => {
                data.logged = false;
                data.admin = false;
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