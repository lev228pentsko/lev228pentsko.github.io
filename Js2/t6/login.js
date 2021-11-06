function login(){
    const email = document.getElementById('email');
    const password = document.getElementById('pass');

    db.collection('users').where("email", "==", email.value).get().then( (res)=>{
       res.forEach(function(doc) {
                    console.log(doc.data());
                });
    });
}
