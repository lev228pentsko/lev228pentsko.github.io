const users = [
	{
		name: "Олег",
		email: "olegivanov@.gmail.com"
	},
	{
		name: "Таня",
		email: "taniavit@.gmail.com"
	},
	{
		name: "Тарас",
		email: "tarik95@.gmail.com"
	},
	{
		name: "Оксана",
		email: "oksana2002@.gmail.com"
	}
];

function showError(text){
    const message = document.getElementById('message');

    message.innerHTML = `<div class="alert alert-danger col-6">${text}</div>`

    setTimeout(clearMessage, 3000)
}

function showSucces(text){
    const message = document.getElementById('message');

    message.innerHTML = `<div class="alert alert-success col-6">${text}</div>`

    setTimeout(clearMessage, 3000)
}

function clearMessage(){
    const message = document.getElementById('message');
    message.innerHTML = ``;
}

function checkName(){
    const name = document.getElementById('name').value;

    const filtered = users.filter( function(user){
       return user.name.toLowerCase() === name.toLowerCase()
    } )

    if( filtered.length > 0 ){
        showError("Таке ім'я вже зайняте!")
        return false;
    } else{
        return true;
    }
}

function checkEmail(){
    const email = document.getElementById('email').value;

    const filtered = users.filter( function(user){
       return user.email.toLowerCase() === email.toLowerCase()
    } )

    if( filtered.length > 0 ){
        showError("Користувач з таким email вже існує!")
        return false;
    } else{
        return true;
    }
}

function register(){
    const name     = document.getElementById('name').value;
    const email    = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let error_name = ``;

    if(name.length < 3){
        error_name += `Ім'я надто коротке!`
    }

    let error_email = ``;
    if(email.length < 6){
        error_email += `Email надто короткий!`
    }
    let error_password = ``;
    if(password.length < 6){
        error_password += `Пароль надто короткий!`
    }

    if( name.length >= 3 && email.length >= 6 && password.length >=6  && checkName() && checkEmail() ){
        showSucces('Користувача успішно зареєстровано!')
    } else {
        showError(`Помилка додавання користувача.<br>${error_name}<br>${error_email}<br>${error_password}`)
    }
}