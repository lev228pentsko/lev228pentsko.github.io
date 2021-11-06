function login(){
    const email = document.getElementById('email');
    const password = document.getElementById('pass');

    db.collection('users').where("email", "==", email.value).get().then( (res)=>{
        console.log(res.doc())
    });
}
