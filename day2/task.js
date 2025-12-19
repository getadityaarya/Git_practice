/*
1. Practice Tasks: Variables
• Create a variable named name and store your name. Print it on the webpage.
• Create two variables a and b. Store numbers and print their sum.
• Create a variable age. If age is 18 or above, print 'Adult'.
• Store your city name in a variable and display it using a button click.
• Create variables for price and quantity. Print total cost.
*/

let name = "Aditya"
let store_name = "GeeksForGeeks"
document.write(name)
document.write(store_name)
console.log(name)
console.log(store_name)

num_1 = 23
num_2 = 24
console.log(num_1+num_2)

age = 24
if(age<18){
    console.log("Under-aged")
}
else{
    console.log("You are an Adult")
}

let price = 20
let quant = 24
let total = price * quant
console.log("Your total amount is: "+ total)

/*
2. Practice Tasks: For Loop
• Use a for loop to print numbers from 1 to 10 on the webpage.
• Print even numbers between 1 and 20 using a for loop.
• Print the table of 5 using a for loop.
• Use a for loop to print 'Hello' 5 times.
• Take a number from input and print numbers from 1 to that number
 */

for(let i = 1; i<=10;i++){
    console.log(i)
}

for(let i =1; i<= 20; i++){
    if(i%2==0){
        console.log(i)
    }
}

for(let i = 1; i<=10;i++){
    console.log(5*i)
}
