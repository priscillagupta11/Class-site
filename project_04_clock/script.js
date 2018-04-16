<<<<<<< HEAD
window.setInterval(function water(){
	var d = new Date();
	var water = document.getElementsByClassName("water")[0];
	var minutesLeft = 60 - d.getMinutes();
	var screenPercentage = window.innerHeight / 60;
	water.style.top = minutesLeft * screenPercentage + "px";
=======
window.setInterval(function water(){
	var d = new Date();
	var water = document.getElementsByClassName("water")[0];
	var minutesLeft = 60 - d.getMinutes();
	var screenPercentage = window.innerHeight / 60;
	water.style.top = minutesLeft * screenPercentage + "px";
>>>>>>> d22e4b4736880e819258405f354cb89d7d0268ce
}, 1000);