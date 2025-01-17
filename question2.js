// Take a variable with a numeric grade and output the corresponding letter grade

let x = 73; // this is the grade

if (x <= 50){ 
    console.log ("You Failed :(")
}else if(x >= 60 && x <= 70){
    console.log ("You got a D")
}else if (x >= 70 && x<=80) {
    console.log("You got a C")
}else if (x >= 80 && x<=90){
    console.log("You got a B")
}else if (x >= 90 && x<= 100){
    console.log("You got a A")
}else if ( x == 100){
    console.log("You did a good job")
}