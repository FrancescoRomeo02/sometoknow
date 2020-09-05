function colored(id) {
	document.getElementsByClassName("la_foto")[id].style.animation =
		"color 2.5s ";
	document.getElementsByClassName("la_foto")[id].style.filter = "grayscale(0%)";
}

function up() {
	document.getElementsByTagName("h1")[0].style.animation =
		"text-pop-up-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both";
}
