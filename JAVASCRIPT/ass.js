let x =10;
if (x >10){
    console.log("x is greater than10");
} else if (x === 10){
    console.log("x is equal to 10");
} else {
    console.log("x is less than 10");
}

let a = 10;
let z = 5;
if (a > 5 && z > 5) {
    console.log("Both a and z are greater than 5");
}else if (a > 5 || z > 5) 
{
    console.log("Ndeither a or z are greater than 5");
}
let b = 20;
let j = 10;
if (b > 20 || j > 10){
    console.log("Either b is greater than 20 or j  is greater than 10 (or both)");
}
else if (b === 20 && j === 10 ) {
    console.log("b is equal to 20 and j is equal to 10");
}
 else {
    console.log("Neither condition is true");
 }

 const c = 8;
 if (!c > 6) {
    console.log("c is less than or equal to 6");
 }
else if (c === 8) {
    console.log("c is equal to 8");
}
else {
    console.log("c is greater than 8");
}

let d = 15;
let result =(d > 9) ? "d is greater than 9" : (d === 9) ?
"d is equal to 9" : "d is less than 9";
console.log(result);

let f = 10;
let y = 5;
if (x > 5){
    if (y >5){
        console.log("Both x and y are greater than 5");
    }
} 
else if (y === 5){
    console.log("x is greater than 5 and y is equal to 5");
}
else {
    console.log("x is greater than 5 but y is less than 5");
  }   {
console.log("x is less than or equal to 5")
} 

let day = "Monday";
switch (day){
    case "Monday":
        console.log("Today is Monday");
        break;
        case "Tuesday":
            console.log("Today is Tuesday");
            break;
            default:
                console.log("Today is not Monday or Tuesday");
}

let color = "blue";
switch (color) {
    case "red":
    case "green":
    case "blue":
        console.log("The color is a primary color"); 
        break;
        case "yellow":
            case "orange":
                case "purple":
                    console.log("The color is a secondary color");
                    break;
                    default:
                        console.log("The color is not a primaey or secondary color");
}

let num = 5;
switch (true) {
    case num > 10:
        console.log("The number is greater than 10");
        break;
        case num === 5:
            console.log("The number is equal to 5");
            break;
            default:
                console.log("The numder is less than 5");
}

function getDay() {
    return "Wednesday";
}
let thisday = getDay();
switch (thisday) {
    case "Monday":
        console.log("Today is Monday");
        break;
        case "Tuesday":
            console.log("Today is Tuesday");
            break;
            case "Wednedsay":
                comsole.log("Today is Wednesday");
                break;
                default:
                    console.log("Today is not Monday , Tuesday or Wednesday");
}

for (let i = 0; i < 5; i++)
{
    console.log(i);
}
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
let person = {name : "Ife" , age: 30, occupation: "Doctor" };
for (let key in person) {
    console.log(key + ":"  + person[key]);
}
for (let n = 0; n <3; n++){
    for (let j =0; j <2; j++){
        console.log(`n: ${i}, j: ${j} `);
    }
}

try {
    let w = 10 /0;
}catch (error) {
    console.log("Error:" + error.message);
}
try {
    let person = { name: "Dayo", age: 40 };
    console.log(person.occupation);
} catch (error) {
    console.log("Error: " + error.message);
}
class InsufficientBalanceError extends Error {
    constructor(message) {
        super(message);
        this.name = "InsufficientBalanceError";
    }
}
try {
    let balance = 100;
    let withdrawalAmount = 150;
    if (withdrawalAmount > balance) {
        throw new InsufficientBalanceError("Insufficientbalance");
    }
} catch (error) {
    console.log("Error: " + error.message);
}