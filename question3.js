//
// Write a program to calculate the volume of a cylinder. 
// Start with a variable that contains the diameter of the end of the circle, 
// and another variable that references the height in meters.
//

let diameter = 14;
let height = 9;

let radius = diameter /2;
let rad = radius * radius;

let volume = Math.PI * rad * height;

console.log(Math.round(volume * 10) / 10 + " is the volume of the cylinder in cm if the radius is "+radius+" and the height is "+ height)

