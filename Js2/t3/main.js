console.log("t3")


function saveUser(){
    const user = {
        name: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value
    };

    if(
        user.name.length == 0 ||
        user.lastName.length == 0 ||
        user.email.length == 0
        ) { alert('Поле не заповнене!'); return }

        db.collection("users").add(user).then( function(){
            getAllUsers();
        })

    console.log(user);
}

const users = [];

function getAllUsers(){
    db.collection("users").get().then( function(res){
        res.forEach( function(doc){       
            const user = doc.data();
            users.push(user);
        });
        
        alert(`User added.${users.length} - users saved`)
    })
}