const users = [
	{
		name: 'Osvaldo',
		lastname: 'Mccants',
		email: 'svaldomcantos@gmail.com',
		gender: 'male',
		confirmed: true
	},
	{
		name: 'Maximina',
		lastname: 'Lasso',
		email: 'maximina2002@bigmir.net',
		gender: 'female',
		confirmed: false
	},
	{
		name: 'Sandee',
		lastname: 'Snelson',
		email: 'sandeesandee@yahoo.com',
		gender: 'female',
		confirmed: true
	},
	{
		name: 'Everette',
		lastname: 'Epperson',
		email: 'epperson24@gmail.com',
		gender: 'male',
		confirmed: true
	},
	{
		name: 'Dante',
		lastname: 'Duchesne',
		email: 'danteduch@yahoo.com',
		gender: 'male',
		confirmed: false 
	},
	{
		name: 'Jenise' ,
		lastname: 'Jones',
		email: 'janiejo@gmail.com',
		gender: 'female',
		confirmed: true
	},
	{
		name: 'Duncan',
		lastname: 'Detwiler',
		email: 'detwillerd@bigmir.net',
		gender: 'male',
		confirmed: true
	},
	{
		name: 'Luna',
		lastname: 'Logan',
		email: 'lunalogan@yahoo.com',
		gender: 'female',
		confirmed: false
	},
	{
		name: 'Verlie',
		lastname: 'Voigt',
		email: 'verlie007@gmail.com',
		gender: 'female',
		confirmed: true
	},
	{
		name: 'Theron',
		lastname: 'Tisby',
		email: 'tisbyteo@gmail.com',
		gender: 'male',
		confirmed: false 
	},
	{
		name: 'Sacha',
		lastname: 'Sherron',
		email: 'sachaato@gmail.com',
		gender: 'female',
		confirmed: true
	},
	{
		name: 'Dani',
		lastname: 'Dehoyos',
		email: 'danid@bigmir.net',
		gender: 'female',
		confirmed: true
	},
	{
		name: 'Lu',
		lastname: 'Laine',
		email: 'lulaine@yahoo.com',
		gender: 'female',
		confirmed: false
	},
	{
		name: 'Carlos',
		lastname: 'Conkle',
		email: 'carlos228@bigmir.net',
		gender: 'male',
		confirmed: true
	},
	{
		name: 'Lucio',
		lastname: 'Lobel',
		email: 'luciol@gmail.com',
		gender: 'male',
		confirmed: true
	},
	{
		name: 'Tanya',
		lastname: 'Huston',
		email: 'taniahus@bigmir.net',
		gender: 'female',
		confirmed: false 
	},
	{
		name: 'Daniel',
		lastname: 'Coto',
		email: 'dannyc@yahoo.com',
		gender: 'male',
		confirmed: true 
	}
];

const users_table = document.getElementById('users_table');

let users_html = ``;

for(i = 0; i < users.length; i++ ){

    let image = `male.svg`;
    if(users[i].gender == 'female'){image = 'female.svg'}

    let box = ``;
    if(users[i].confirmed == true){box = `checked`}

    users_html += 
    `
<tr>
    <td>${i + 1}</td>
    
    <td>${users[i].name} ${users[i].lastname}</td>
    
    <td class="centered"> <img src=${image} class="icon"> </td>
    
    <td>${users[i].email}</td>
    
    <td class="centered"> <input type="checkbox" ${box}> </td>
</tr>
    `

}

users_table.innerHTML = users_html

console.log(users)