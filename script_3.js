// Comparing value of 3 different numbers 

let x = 12, y = 20, z = 10;

if(x > y && x > z) {
    console.log("x is the greatest number");
} else if(y > x && y > z) {
    console.log("y is the greatest number");
} else if(z > x && z > y) {
    console.log("z is the greatest number");
} else {
    console.log("There are equal numbers. Enter different numbers.");
}