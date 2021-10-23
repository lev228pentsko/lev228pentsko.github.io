const users_table = document.getElementById('users_table');

const firstName = document.getElementById('name');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const age = document.getElementById('age');

let user_id = "";

var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
})

db.collection("users").get().then(function(res)  {
    let num = 0
    res.forEach( function(doc) {
        const user = doc.data();
        user.id = doc.id;

        console.log(user);

        num++;
        drawUser(user, num)
    });
    const del_buttons = document.getElementsByClassName('btn-del');
    const del_buttons_arr = Array.from(del_buttons);
    del_buttons_arr.forEach( function(btn){
        btn.addEventListener('click', function(){
            console.log('delete')
            const tr = btn.parentElement.parentElement;
            //видаляємо документ по id рядка
            db.collection("users").doc(tr.id).delete().then( function(){
                // дії після видалення
                console.log("Document deleted!")
                document.getElementsByTagName(tr.id).remove();
            });
        })
    })

    const edit_buttons = document.getElementsByClassName('btn-edit');
    const edit_buttons_arr = Array.from(edit_buttons);
    edit_buttons_arr.forEach( function(btn){
        btn.addEventListener('click', function(){
            console.log('edit' , btn);    
        const tr = btn.parentElement.parentElement;
            
        const columns = tr.getElementsByTagName("td");

        firstName.value = columns[1].innerText;
        lastName.value  = columns[2].innerText;
        email.value     = columns[3].innerText;
        age.value       = columns[4].innerText;

       

          myModal.show();

          user_id = tr.id;

            console.log(columns);
        })
    })

});

function drawUser(user, num){
    const row = document.createElement('tr');

//додаємо номер користувача
    const index = document.createElement('td');
    index.innerText = num;
    row.appendChild(index);

//додаємо ім'я користувача у таблицю
    const name = document.createElement('td');
    name.innerText = user.name;
    row.appendChild(name);

//додаємо прізвище користувача у таблицю
    const lastName = document.createElement('td');
    lastName.innerText = user.lastName;
    row.appendChild(lastName);

//додаємо email користувача у таблицю
    const email = document.createElement('td');
    email.innerText = user.email;
    row.appendChild(email);

//додаємо вік користувача у таблицю
    const age = document.createElement('td');
    age.innerText = user.age;
    row.appendChild(age);

//додаємо кнопку редагувати
    const edit = document.createElement('button');
    edit.classList.add('btn')
    edit.classList.add('btn-sm')
    edit.classList.add('btn-primary')
    edit.classList.add('btn-edit')
    edit.innerText = "Edit";

    const edit_td = document.createElement('td');
    edit_td.appendChild(edit);
    row.appendChild(edit_td);

//додаємо кнопку видалити
    const del = document.createElement('button');
    del.classList.add('btn')
    del.classList.add('btn-sm')
    del.classList.add('btn-danger')
    del.classList.add('btn-del')
    del.innerText = "Delete";

    const del_td = document.createElement('td');
    del_td.appendChild(del);
    row.appendChild(del_td);

    row.id = user.id;
    users_table.appendChild(row);
}
function saveChanges(){
    console.log('save')

    const user = {
        name: firstName.value,
        lastName: lastName.value,
        email: email.value,
        age: age.value
    }

    console.log(user)

    db.collection("users").doc(user_id).update(user).then( function(){
        // дії після видалення
        console.log("Document is updated!")
        const row = document.getElementById(user_id)
        const columns = row.getElementsByTagName("td");

        columns[1].innerText = firstName.value;
        columns[2].innerText = lastName.value;
        columns[3].innerText = email.value;
        columns[4].innerText = age.value;

        myModal.hide();
    });
}