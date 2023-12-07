const body = document.body;
const allbtn = document.querySelectorAll("button");

function randomColor(){
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	
	return `rgb(${red},${green},${blue})`
}

allbtn.forEach(btn => {
	

	btn.addEventListener("click", function(){
		
		const random = randomColor();
		body.style.backgroundColor = random;

	});

});