// const a=10
// a=20

// using var and let 
// for(let i=0;i<10;i++){
//     console.log("Hello world")
// }
// console.log(i)

/*let product = "Laptop";
let price = 50000;
let tax = 5000;  // output is product name: Laptop 
                //Total Price including tax :55000
console.log("Product Name: " + product);

let total = price + tax;

console.log("Total Price including tax: " + total);
*/


/*const marks = [10, 20, 30, 40];

const firstDivision = marks.filter(mark => mark >= 19);

console.log(firstDivision);*/


/*function sendConfirmationMail(name) {
    return `Hi ${name},

Thank you for your order. We will process the details and update you soon when it is shipped.`;
}

console.log(sendConfirmationMail("Chandini"));
*/

// nums =[10,20,30,40]

// const[a,b]=nums
// console.log(a)
// console.log(b)

/*
//Swapping a 2 numbers old way
let x=5;
let y=10;

let temp=x;
x=y;
y=temp;
*/


// //destructuring
// let x = 2;
// let y = 4;

// [x, y] = [y, x];

// console.log(x, y);


/*
//array
let arr=7;

let[a,b=100]=arr;

console.log(a);
console.log(b);
/*
*/
/*
// object destructuring
let person = {
    name: "pattu",
    age: 21,
    department: "cse"
};
*/
/*
//Deconstructuring it 
let {name, age, department} = person;

console.log(name);
console.log(age);
console.log(department);    //Key names must match.
*/
/*
//Rename the variables
let {name:username,age =years}=person;

console.log(username);
console.log(years);
*/

//Rename the variables
/*let person = {
    name: "pattu",
    age: 21,
    department: "cse"
};

let { name: username, age: years } = person;

console.log(username);
console.log(years);
*/

/*
//Spread operator using arrays 
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

//Spreap operator using merging arrays
let arr1 = [10, 20];
let arr2 = [30, 40];

let merged = [...arr1, ...arr2];

console.log(merged);
*/


// //copy the array 
// let arr1 = [10, 20, 30, 40];

// // copy the array
// let arr2 = [...arr1];

// console.log(arr1);
// console.log(arr2);

/*
//spread in afunction call
// spread in a function call
function sum(a, b, c) {
    return a + b + c;
}

let numbers = [10, 20, 30];

let result = sum(...numbers);

console.log(result);
*//*
//REST OPERATOR WILL COLLECTING THE ARRAY 
function add(...nums){
    console.log(nums)
}
add(2,3);
*/
/*
// using rest operator to add array elements
function add(...nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    console.log(sum);
}

add(2, 3, 4, 5, 7);
*/
/*
//the paranthisis are always must be at the end of the function.
function add(...a,b)//-->> rest correct way

function add(a,...b)//-->>rest wrong way.   for the spread operator is to collect variables that must be (...) at the beganing of the paranthisis
*/

//module in javascript
//it is just a file  
//also each file can export things and other files can inport them 



//-16-03-2026
//promise topic 
let myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Order delivered");
    } else {
        reject("Order failed");
    }
});
myPromise.then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
})