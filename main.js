// Create a reference for the canvas
canvas = document.getElementById('mycanvas');
ctx=canvas.getcontext("2d");
canvas= new fabric.Canvas("myCanvas")
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg;
	img_imgTag.src = img_image;   
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
	{
		alphabetkey();
		document.getElementById("d1").innerHTML="You pressed alphabetkey";
		console.log("alphabetkey")
	}
}

function alphabetkey()
{
	//upload respective image with the message. 
img_image="Alpkey.png";
add()
}
function numberkey()
{
	img_image="numkey.png";
add()
}
function arrowkey()
{
	img_image="Arrkey.png";
add()
}
function specialkey()
{
	img_image="spkey.png";
	add()	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
