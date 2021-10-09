console.log("Hello World");

const box = document.getElementById('box');

const box2 = document.getElementById('box2');

/*
console.log(box);

box.style.background = "yellow";

box.style.marginLeft = "100px";
*/

function move(direction){
	if(direction == 'left'){
		const prev = Number( box.style.left.replace('px', '') );
		const next = prev + 20 + "px";
		
		box.style.left = next;
	}

	if(direction == 'right'){
		const prev = Number( box.style.left.replace('px', '') );
		const next = prev - 20 + "px";
		
		box.style.left = next;
	}

	if(direction == 'down'){
		const prev = Number( box.style.top.replace('px', '') );
		const next = prev + 20 + "px";
		
		box.style.top = next;
	}

	if(direction == 'top'){
		const prev = Number( box.style.top.replace('px', '') );
		const next = prev - 20 + "px";
		
		box.style.top = next;
	}
	
	if(box.style.left == box2.style.left){

		alert("You win!")
	}
}

document.addEventListener('keydown', function(e){
	console.log(e.keyCode);
	move();
	if(e.keyCode == 39){
		move('left')
	}

	if(e.keyCode == 37){
		move('right')
	}

	if(e.keyCode == 38){
		move('top')
	}

	if(e.keyCode == 40){
		move('down')
	}
})
