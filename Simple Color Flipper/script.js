
const colors = ["#FF3333", "#A52A2A", "#008B8B", "#006400", "#FF8C00", "#2F4F4F", "#00BFFF", "#228B22", "#CD5C5C", "#90EE90"];
var length = colors.length;

var body = document.body;
var color_text = document.getElementById("color");
var button = document.getElementById("button");

let color = "blue";

function changeColor() {
	var random_int = Math.floor(Math.random() * length);
	color = colors[random_int];

	body.style.background = color;

	button.style.background = "white";
	button.style.color = color;

	color_text.style.color = color;
	color_text.innerHTML = color;
}

function mouseover() {
	button.style.background = "white";
	button.style.color = color;
}

function mouseleave() {
	button.style.background = color;
	button.style.color = "white";
}

function mousemove() {
	button.style.background = "white";
	button.style.color = color;
}