function showModal(id){
    document.getElementById('myModal').style.display = "block";
    const user = findUser(id);
    console.log(user)
    const user_info = document.getElementById('user_info');

    user_info.innerHTML = 
    `
    <p><b>Ім'я:</b>${user.name}</p>
	<p><b>Місто:</b>${user.address.city}</p>
	<p><b>Email:</b>${user.email}</p>
	<p><b>Телефон:</b>${user.phone}</p>
	<p><b>Сайт:</b> <a href="https://${user.website}" target="_blank">${user.website}</p>
	<p><b>Компанія:</b>${user.company.name}</p>
    `
    document.getElementById('map').setAttribute(
        'href' ,
         `https://www.google.com.ua/maps/@${user.address.geo.lat},${user.address.geo.lng},13.12z`
        )
    document.getElementById('mail').setAttribute(
        'href' ,
            `mailto:${user.email}`
        )
}
function hideModal(){
    document.getElementById('myModal').style.display = "none";
}

function findUser(id){
    const user = users.filter( function(user){
        return user.id === id
    } )
    return user[0];
}

function drawUsers(){
    const users_table = document.getElementById('users_table');
    let users_html = ``;

    users.forEach( function(user, index){
        users_html += 
        `
        <tr>
				<td>${index + 1}</td>
				<td>${user.name}</td>
				<td>${user.email}</td>
				<td>
						<button class="btn btn-sm btn-primary" onclick="showModal('${user.id}') ">
				Детально
				        </button>
				</td>
				<td>
				<button class="btn btn-sm btn-danger" onclick="deletUsers('${user.id}')">Видалити</button>
			    </td>
		</tr>
        `

    } )
    users_table.innerHTML = users_html;
}
drawUsers();
function deletUsers(id){
    users = users.filter( function(user){
        return user.id != id
    } )
    drawUsers();
}