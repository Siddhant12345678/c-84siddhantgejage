canvas = document.getElementById('myCanvas');// Create a reference for the canvas
ctx = canvas.getContext("2d");
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	{
		document.getElementById("d1").innerHTML="You Have Pressed An Alphabet key";
	}
	if((keyPressed >=48 && keyPressed<=57))
	{
		document.getElementById("d1").innerHTML="You Have Pressed An Number Key";
	}
	if((keyPressed >=37 && keyPressed<=40))
	{
		document.getElementById("d1").innerHTML="You Have Pressed An Arrow Key";
	}
	if((keyPressed =17))
	{
		document.getElementById("d1").innerHTML="You Have Pressed An Special Key";
	}
}

function aplhabetkey()
{
	img_image="Alpkey.png";
	add(); 

}
function numberkey()
{
	img_image="numkey.png";
	add(); 
}
function arrowkey()
{
	img_image="Arrkey.png";
	add(); 
}
function specialkey()
{
	img_image="spkey.png";
	add(); 
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
