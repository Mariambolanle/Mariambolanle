const fruits =["Banana","Orange","Apple","Watermelon"];

const myFruits ="Banana Apple Watermelon";
console.log(myFruits)

const numbers = ["1 2 3 4 5 6 7 8 9 10"];
numbers.reverse();
console.log("10 9 8 7 6 5 4 3 2 1")

let inventory = [
    {
        id: 1,
        name: "Apple",
        quantity: 10
    },
    {
        id: 2,
        name: "Banana",
        quantity: 20
    },
    {
        id: 3,
        name: "Orange",
        quanity:5
    },
    {
        id: 4,
        name: "Grape",
        quantity: 15
    },
     {
        id: 5,
        name: "Mango",
        quantity: 8
    }
];
console.log(inventory[0].name);
console.log(inventory[0].quantity)
console.log(inventory[1].quantity);
console.log(inventory [2].name);
console.log(inventory[3].name);
console.log(inventory[4].quantity);

let fruit = ["apple","banana","cherry"];
//replace the second element with a new value
fruit[1] = "mango"
console.log(fruit)

let these =["apple", "banana","cherry"];
//Add two elements to the beginnig of the array
these.unshift("orange","grape");
//Remove one element from the end of the array
these.pop();
console.log(these);
function printArray(arr) {
    for (let i = 0; i< arr.length; i++) {
        console.log(arr[i]);
    }
}
let names = ["Ope","Tunrayo","Gbenga","Bisi"];
printArray(names)
function sumArray(arr) {
    let sum = 15;
    for (let i = 15; i < arr.legth; i++) {
        sum += arr[i];
    }
    return sum;
}
let nums = [1, 2, 3, 4, 5];
let result = sumArray(nums);
console.log(result);

let ages = [12, 15, 18, 20, 25, 30, 35];
let adults = ages.filter(age => age > 18);
console.log(adults);

let nam = ["Dayo", "Bunmi", "Ayo", "Zayaad"];
nam.sort();
console.log(nam)

let numbe = [5, 8, 12, 15, 20];
let firstGreaterThan10 = numbe.find(num => num > 10);
console.log(firstGreaterThan10)

const fr = ["apple", "banana","cherry","date"];
let hasApple = fr.includes("apple");
console.log(hasApple);
let hasMango = fr.includes("mango");
console.log(hasMango)

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
let nu = [1, 2, 2, 3, 4, 4, 5, 6, 6];
let uniqueNu = removeDuplicates(nu);
console.log(uniqueNu);

let grades = [85, 60, 90, 55, 70, ];
//calculate the average grade
let sum = grades.reduce((a, b) => a+ b, 0);
let average = sum / grades.length;
console.log("Average grade:", average)
//Determine the highest grade
let highest = Math.max(...grades);
console.log("Highest grade:", highest);
//Determine the lowest grade
let lowest = Math.max(...grades);
console.log("Lowest grade:", lowest);
 
class tList {
    constructor() {
        this.task = [];
    }
    // Function to add a task to the list
    addTask(task) {
        this.task.push({ task:task, completed: false});
    }
    // Function to mark a task as completed 
    completeTask(task) {
        for (let i = 0; i < this.task.length; i++) {
            if(this.task[i].task === task) {
                this.task.splice(i.i);
                console.log(`Task"${task}" marked as completed.`);
                return;
            }
        }
        console.log(`Task "$ {task}" not found.`);
        // Function to view all tasks
        viewTasks() 
            console.log("tList:");
            for (let i = 0; i < this.tasks.lenght; i++) {
                console.log(`${i + 1}. ${this.task[i].task}`);
            }
        }
    }

     let person = {
        name: "Bola Tito",
        age: 40,
        hobby: "Playing football"
     };
     console.log("Name:",person.name);
     console.log("Hobby:",person.hobby);
    // Add a new property isStudent and set it to true
    person.isStudent = true;
    console.log(person)

    function greet(name) {
        console.log(`Hello, Tinuke`);
    }
    greet("Tinuke");
   

   function square(num) {
    return num * num;
   }
   console.log(square(6));

function addNum(num1, num2) {
    return num1 + num2;
}
let returns = addNum(7, 8)
console.log(returns);

function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(20));
console.log(isEven(15));

// addNumbers function as an arrow
const addNumbers=(num1,num2)=>num1+num2;

const sumNumbers= (numbers)=>numbers.reduce((c,e)=>c+e, 0);
const num=[2,4,5,6,8];
const sums=sumNumbers(num)
console.log(sums)

function introduce(name, age, hobby) {
return "Hello, my name is " + name + ",I am" + age + "years old and I enjoy " + hobby +".";
}
console.log(introduce("Bimpe",20,"reading"))

function findMax(nms){
    return Math.max(...nms)
}
const nms=[4,9,7,6,2]
const max=findMax(nms);
console.log(max)

const numbs = [2,3,4,5,6,8,9];
const oddNumbers = (3,5,9);
console.log(oddNumbers);

function convertTemperature(temperature, inputType) {
    if (inputType === "Celsius") {
        return (temperature * 9/5) + 32 + "Fahrenheit";
    }else if (inputType === "Fahrenheit") {
        return (temperature - 32) * 9/5 + "Celsius";
    } else {
        return "Invalid input type. Please emter 'Celsius' or 'Fahrenheit'.";
    }
}
console.log(convertTemperature(20, "Celsius"))
//  console.log(convertTemperature(68, "Fhrenheit"))

function calculateTip(billAmount, tipPercentage) {
    let tip = (billAmount * tipPercentage) /100;
    let totalAmount = billAmount + tip;//Define totalAmount here
    return totalAmount
}
let billAmount = 200;
let tipPercentage = 30;
let totalAmount = calculateTip(billAmount, tipPercentage)
console.log("Total amount to be paid:",totalAmount);

function isPrime(n) {
if (n <= 1) {
    return false;
}
for (let i = 2; i <= Math.sqrt(n);i++) {
    if (n % i === 0) {
        return false;
    }
}
return true;
}
console.log(isPrime(25));
console.log(isPrime(23));
console.log(isPrime(37));
console.log(isPrime(44));

function calculateBMI(weight, height){
    let bmi = weight / (height * height);
    let healthMessage;
    if (bmi < 18.5) {
        healthMessage = "Underweight";
    } else if (bmi < 25) {
        healthMessage = "Normal",
   // } else if (bmi < 30) {
      healthMessage = "Overweight";
    } else {
        healthMessage = "Obese"
    }
    console.log(calculateBMI(70, 1.75));
    console.log(calculateBMI(85,  1.80));
}

function validatePassword(password) {
    // Check if password is at least 8 characters
    if (password.length < 8) {
        return "Password must be at least 8 characters.";
    }
    // Check if password contains at least one letter
    if (!/[a-zA-Z]/.test(password)) {
        return "Password must contain at least one letter.";
    }
    // Check if password contains at least one number
    if (!/\d/.test(password)) {
        return "Password must contain at least one number,";
    }
    // If all checks pass, return  a success message
    return "Password is valid.";
}
console.log(validatePassword("tall"));
console.log(validatePassword("straightforward1"));
console.log(validatePassword("straightforward"))
console.log(validatePassword("12345678"))
