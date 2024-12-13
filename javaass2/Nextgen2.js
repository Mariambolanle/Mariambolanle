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











