const heading = document.createElement('h1');
const headingText = document.createTextNode("Creating a canvas from JavaScript!");
heading.appendChild(headingText);

document.body.appendChild(heading);


const canvas = document.createElement('canvas');
canvas.setAttribute('id', 'myCanvas');
const context = canvas.getContext('2d');
context.fillStyle = "green";
context.fillRect(10, 10, 100, 50);

document.body.appendChild(canvas);


