const fruits =["Banana","Orange","Apple","Watermelon"];

const myFruits ="Banana Apple Watermelon";
console.log(myFruits)

const numbers = ["1 2 3 4 5 6 7 8 9 10"];
numbers.reverse();
console.log("10 9 8 7 6 5 4 3 2 1")

// function getname(firstname,
//     lastName){
//        let name ='i am a boy'
//         console.log( 'welcome to the team ${folarin}');
//     }
//     getname('adekunle');
//     getname();
//     const func =(newNumber) => {
//         console.log(newNumber ** 2);
//     }
//     func(7);
//     func(10);

    const func = (firstName, Age) => {
        console.log(`Welcome ${firstName}, you are ${Age} years old`)
    }
    func("Alhaja", 18)

    function newFunc (firstName, Age){
        console.log(`Welcome ${firstName}, you are ${Age} years old`)
    }
    newFunc("Alhaj1", 28)