// Take a variable with a numeric grade and output the corresponding letter grade

let x = 90; // this is the grade

if (x <= 50){ 
    console.log ("You Failed :(")
}else if(x >= 60 && x <= 69){
    console.log ("You got a D")
}else if (x >= 70 && x<=79) {
    console.log("You got a C")
}else if (x >= 80 && x<=89){
    console.log("You got a B")
}else if (x >= 90 && x<= 99){
    console.log("You got a A")
}else if ( x == 100){
    console.log("You did a good job")
}