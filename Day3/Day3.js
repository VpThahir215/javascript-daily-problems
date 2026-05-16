// QUASTION 1 
// 


// Use conditional statements to compare three numbers and print the largest value.?



// let num1=prompt("Enter first number");
// let num2=prompt ("Enter second number");
// let num3=prompt("Enter third number");

 
//  if(num1>=num2 & num1>=num3){
// document.write(num1)
//  }else if(num2>=num1 & num2>=num3){
//     document.write(num2)
//  }else{
// document.write(num3)
// }


// QUASTION 2


// Check Even or Odd
// Create a function that receives a number and checks whether it is even or odd.
// Example:
// Input:
// 8

// Output:
// Even



function EvenOrOdd(num){
if (num%2===0){
console.log("it is Even number")

}else{
console.log("it is Odd number")
}
}
EvenOrOdd(10);






// QUASTION 2



// Sum of Numbers from 1 to 100
// Use loop to calculate the total sum from 1 to 100.
// Example:
// Output:
// 5050



	let sum=0
	for (let  i=1; i<=100;i++){
	sum=i+sum;

	}
	console.log(sum)



   // QUASTION 3



//     Find Factorial of a Number
// Create a function using loop to calculate factorial.
// Example:
// Input:
// 5

// Output:
// 120


let res=1;
for (i=5;i>=1;i--){
res=i*res;
}

console.log(res);


// QUASTION 4

// Reverse a String
// Use loop to reverse the string manually.
// Example:
// Input:
// hello

// Output:
// olleh




let re=""
let str ="hello";
for (i=str.length -1;i>=0;i--){
     re+=str[i];
     }
     console.log(re);






// QUASTION 4




// Count Vowels in a String
// Use loop and conditions to count vowels.
// Example:
// Input:
// javascript

// Output:
// 3 vowels





let count=0


let arr="javascript";

for(i=0;i<=arr.length;i++){
   if(arr[i]==="a" ){
      count++
   }else if(arr[i]==="e"){
      count++
   }else if(arr[i]==="i"){
      count++
   }else if(arr[i]==="o"){
      count++
   }else if(arr[i]==="u"){
      count++
   }
}
if(count>=1){
console.log(count +" vowels");
}else{
   console.log("thare are not vowel");
   
}




// QUASTION 5



            //         * 
            //       * * 
            //     * * * 
            //   * * * * 
            // * * * * * 
            //   * * * * 
            //     * * * 
            //       * * 
            //         * 




for(let i=1;i<5;i++){
   let res=""
   for(let s=10;s>=i;s--){
      res+="  "
   }
   for(let k=1;k<=i;k++){
      res+="* "


 
   }
    console.log(res);
}
for(i=5;i>=1;i--){
   let res="";
       for(let s=10;s>=i;s--){
      res+="  "
       }
   for(k=1;k<=i;k++){
      res+="* "
   }
   console.log(res);
   
}



