
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
// Examples

// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// // 97 contains the number seven.

// Notes

// N/A




function sevenBoom(arr){
let length=arr.length;
for(i=0;i<=length -1;i++){
if(arr[i].toString().includes("7")){
return "Boom!"

}
}
return "there is no 7 in the array"
}
console.log(sevenBoom([1,2,3,4,5,6,7]));


// Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.
// Examples

// printArray(1) ➞ [1]

// printArray(3) ➞ [1, 2, 3]

// printArray(6) ➞ [1, 2, 3, 4, 5, 6]

// Notes

//     READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
//     Don't overthink this challenge; it's not supposed to be hard.
    
    
console.log("One -------------------------------------");




  function printArray(num){
        let arr=[]
    for (i=1;i<=num;i++){
        arr.push(i)
    }
    return arr;
    }
    console.log(printArray(10));
    

        
console.log("Two-------------------------------------");

let a =10;
let b=20;
console.log(` Thahir ${a} VP  ${b} Happy`);
