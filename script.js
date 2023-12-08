const body = document.body;
const btn = document.querySelector("button");
const auto = btn.nextElementSibling;
let id;

function randomColor(){
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	return `rgb(${red},${green},${blue})`
}

btn.addEventListener("click", function(){
	const random = randomColor();
	body.style.backgroundColor = random;
});

auto.addEventListener("click", function(e){
	if(e.target.textContent === " Auto: ON "){
		e.target.textContent = " Auto: OFF ";
		clearTimeout(id);
	}
	else if(e.target.textContent === " Auto: OFF "){
		e.target.textContent = " Auto: ON ";
		
		const time = range.value * 1000;
		id = setInterval(() => {
			const random = randomColor();
			body.style.backgroundColor = random;
		}, time);
	}
});

const range = document.querySelector("input");

range.addEventListener("change", e => {
	e.target.previousElementSibling.textContent = `${range.value}s`;
	
	if(auto.textContent === " Auto: ON "){
	clearTimeout(id);
	const time = range.value * 1000;
	id = setInterval(() => {
		const random = randomColor();
		body.style.backgroundColor = random;
	}, time);
	}
});