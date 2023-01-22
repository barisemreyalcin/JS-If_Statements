// Calculating average grade point and specifying success state
// Midterms 40%
// Final 60%
// Final grade should be higher than 50
// It is enough to take a grade that higher than 70 in Final Exam to pass the course

let midterm1 = 100;
let midterm2 = 100;
let final = 45;

let avg = (((midterm1 + midterm2) / 2) * 0.4) + (final * 0.6);
console.log("Your average point: " + avg + ", Your Final Exam score: " + final);

if ((avg >= 50 && final >= 50) || final >=70) {
    console.log("Success Status: Passed");
} else {
    console.log("Success Status: Failed");
}
