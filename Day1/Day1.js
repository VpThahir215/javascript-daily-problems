
console.log("One------------------------------");

// // Create a function that takes an array containing only numbers and return the first element.
// Examples

// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500

// Notes

// // The first element in an array always has an index of 0.



function getFirstValue(a){

return a[0]
}
console.log(getFirstValue([10,20,30,40,50]));





console.log("Two------------------------------");
// Create a function that takes two numbers as arguments and returns their sum.
// Examples

// addition(3, 2) ➞ 5

// addition(-3, -6) ➞ -9

// addition(7, 3) ➞ 10

// Notes

//     Don't forget to return the result.
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.


function sum(a,b){
    return a+b
}
console.log(sum(10,20));


console.log("Three------------------------------");


// Write a function that converts hours into seconds.
// Examples

// howManySeconds(2) ➞ 7200

// howManySeconds(10) ➞ 36000

// howManySeconds(24) ➞ 86400

// Notes

//     60 seconds in a minute, 60 minutes in an hour
//     Don't forget to return your answer.

function howManySeconds(a){
let min_1=60;
let hour_1=60*60;
let result=hour_1*a;


return result
}
console.log(howManySeconds(2));


console.log("Four------------------------------");


// Create a function that takes voltage and current and returns the calculated power.
// Examples

// circuitPower(230, 10) ➞ 2300

// circuitPower(110, 3) ➞ 330

// circuitPower(480, 20) ➞ 9600

// Notes

// Requires basic calculation of electrical circuits (see Resources for info).




function circuitPower(a,b){
let power=a*b;
return power



}

console.log(circuitPower(230,10))


console.log("Five------------------------------");



// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
// Examples

// squared(5) ➞ 25

// squared(9) ➞ 81

// squared(100) ➞ 10000

// Notes

//     READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
//     Don't overthink this challenge; it's not supposed to be hard.








function squared(sa){
let res =sa**2;
return res;
}
console.log(squared(5))

console.log("Six------------------------------");


// Write a function that takes an integer minutes and converts it to seconds.
// Examples

// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120

// Notes

//     Don't forget to return the result.
//     If you get stuck on a challenge, find help in the Resources tab.
//     If you're really stuck, unlock solutions in the Solutions tab.




function convert(min){
let second=min*60;
return second;
}
console.log(convert(5));




