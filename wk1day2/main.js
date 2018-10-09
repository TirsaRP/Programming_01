//say hello
console.log('Hello World!');

//Get reference to canvas
const canvas= document.getElementsByTagName('canvas')[0];

//Set canvas size
canvas.width = document.documentElement.ClientWidth;
canvas.height= document.documentElement.ClientHeight;

console.log(canvas);

//Get context from canvas 
const context= canvas.getContext('2d');
console.log(context);

//Set color: red, green, blue, alpha
context.strokeStyle = "rgba(0, 169, 162, 0.5)";

//Set dashes
context.setLineDash([5, 15, 3, 9]);

//Set thickness
context.lineWidth = 3;


//Draw a filled triangle
context.beginPath();
context.moveTo(25, 25);
context.lineTo(105, 25);
context.lineTo(25, 105);
context.fill();

//Draw a stroked triangle
context.beginPath();
context.moveTo(125, 125);
context.lineTo(125, 45);
context.lineTo(45, 125);
context.closePath();
context.stroke();

//Boolean variable for mouse state
let isMouseDown= false;

//Handle mouse down
function handleMouseDown(event){
    console.log("Mouse button down");
    console.log("Mouse at x: "+ event.clientX + ", y: " + event.clientY);
    isMouseDown = true;
    context.beginPath();
    context.moveTo(event.clientX, event.clientY);
}

//Handle mouse up
function handleMouseUp(event){
    console.log("Mouse button up");
    isMouseDown = false;
    context.closePath();
}

//Handle mouse movement
function handleMouseMove(event){
    console.log("Mouse is moving");
    if(isMouseDown === true) {
    context.lineTo(event.clientX, event.clientY);
    context.stroke();
    }
}
//Set mouse listeners
document.addEventListener("mousedown", handleMouseDown, false);
document.addEventListener("mouseup", handleMouseUp, false);
document.addEventListener("mousemove", handleMouseMove, false);