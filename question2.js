// Take a variable with a numeric grade and output the corresponding letter grade

let x = 90; // this is the grade

if (x <= 59){ 
    console.log (`You Failed :( with a mark of ${x}`)
}else if(x >= 60 && x <= 69){
    console.log (`You got a D with a mark of ${x}`)
}else if (x >= 70 && x<=79) {
    console.log(`You got a C with a mark of ${x}`)
}else if (x >= 80 && x<=89){
    console.log(`You got a B with a mark of ${x}`)
}else if (x >= 90 && x<= 99){
    console.log(`You got a A with a mark of ${x}`)
}else if ( x == 100){
    console.log("You did a good job")
}