function login(){
    const email = document.getElementById('email');
    const password = document.getElementById('pass');

    db.collection('users').where("email", "==", email.value).get().then( (res)=>{
       res.forEach(function(doc) {
            let user = {
                id: doc.id,
                ...doc.data()
            }
            console.log(user.password);
            console.log(password.value);
            if(user.password == password.value){
                localStorage.setItem("user", JSON.stringify(user));
                window.location.href = "index.html";
            }else{
                alert("Невірний пароль!")
            }
            console.log(user);
           
        });
    });
}
function checkUser(){
    const user = localStorage.getItem("user");
    if(user != null || user != ""){
        window.location.href = "index.html";
    }
}
checkUser();