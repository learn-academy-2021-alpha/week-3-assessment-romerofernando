// ASSESSMENT 3: Coding practical questions with Jest


// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:  .;
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

test("when fibbonacci is called, retrun array", ()=>{
    const argument = 10
    const actualResults = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(actualResults).toEqual[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
})


// b) Create the function that makes the test pass.

//create a function that takes a number as the argument     
const fibonacci= (value)=> {
//create a new array to hold fibonacci sequence
let array = [1,1];
//for loop to iterate the 6th index of a fibonacci sequence 1,1,2,3,5,8,13,21,34,55,89,144... basically taking the privous index calculating the sum and adding it to the next index the amount of times you ask it to.
//we know the first 2 values will always be 1,1

    for (let i = 2; i< value ; i++){
        array.push(array[i - 2] + array[i -1])
    }
    return array
}
    
console.log(fibonacci(10))
console.log(fibonacci(6))

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]
// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]










// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
test ("when onlyNumsSort is called, return a new array with only number sorted from least to greatest", ()=>{
    const argument = fullArr1;
    const actualResults = [-9, 7, 9, 199]
    expect(actualResults).toEqual([-9, 7, 9, 199])
    
})


// b) Create the function that makes the test pass.

//setting up function that takes in mixed array
const findingNum = (array) => {
 //set up new var to hold a filterd mixed array with only numbers 
 //use inner function to sort the values once typeof determeins number only  
    let onlyNums = array.filter(function(value) {
//return only typeof "number"
        return typeof value === "number"
    })
//then takes the numbers array and compares it using inner function sortNum(a,b){return a-b} return onlyNums.sort(sortNums)
    function sortNums(a , b) { 
        return a - b;
    }
    return onlyNums.sort(sortNums)
}
 

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23, 78]

// console.log(findingNum(fullArr1))
// console.log(findingNum(fullArr2))

// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

// a) Create a test with expect statements for each of the variables provided.
describe ("when evenOrOddString is called", ()=>{
it ("if string is alpha, return p", ()=>{
    const argument = middleLetters1
    const actualResults = evenOrOddString(middleLetters1)
    expect(actualResults).toEqual("p")
})
it ("if string is rhinoceros, return oc", ()=>{
    const argument = middleLetters2
    const actualResults = evenOrOddString(middleLetters2)
    expect(actualResults).toEqual("oc")
})

})



// // b) Create the function that makes the test pass.

//create a funtion that takes a "string as an argument"
const evenOrOddString = (array) =>{
//splits that string and returns the number of index
//create a var to hold split string
        // return array[Math.floor(array.length/2)]
        let splitString= array.split("")
//if number of index is even retrun 2middle index
        if ([splitString.length + 1]  % 2 !== 0)
        return [array[Math.floor(array.length-2)], (array[Math.floor(array.length/2)])].join("")
//if number of index is odd return middle index  
        else 
        return array[Math.floor(array.length/2)]        
    }
// return splitString.join()

var middleLetters1 = "alpha"
// Expected output: “p”

var middleLetters2 = "rhinoceros"
// Expected output: “oc”

// console.log(evenOrOddString(middleLetters1))
// console.log(evenOrOddString(middleLetters2))



// // --------------------4) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// // a) Create a test with expect statements for each of the variables provided.

// test("when summerUpper is called, return a new array of the same length with the first index adding to the following index", ()=>{
//     const argument= numbersToAdd1
//     const actualResults= [2, 6, 51, 60]
//     expect(actualResults).toEqual([2, 6, 51, 60])
// })

// // //create an function that takes in a array of numbers
// const summerUpper = (array) =>{
// // //returns a new array of the same length .map() with each index plus the previous index.
        
//  var addedArray = array.map(value, index, array =>{
//      array.forEach(value => {
//          value + value[index+1]    
//      })
//      return addedArray

//  })
// return addedArray
// }


// //         // array.forEach(callback(currentValue[, index[, array]]){
// //         //     element + i++
// //         // });
// //         array.map(addTheValue);

// //         function addTheValue(value,index, array){
// //             return addedArray.push(value + index++ )
// //     // for (let i = 0; i< array.length ; i++){
// //     // addedArray.push(value)
// //     // // // return value 
// //         }return addedArray
// //     }
// // //forEach( value =>{ value + value[i-1]})

// var numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]

// var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]

// var numbersToAdd3 = []
// // Expected output: []

// console.log(summerUpper(numbersToAdd1))




