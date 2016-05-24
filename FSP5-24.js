// // //Functional Style Programming
// //
// // //1) Imperative
// //
// // var chooseOne = ['charmander', 'bulbasaur', 'squirtle']
// //
// // for (var i=0; i < chooseOne.length; i++) {
// //     chooseOne[i]=chooseOne[i].toUpperCase()
// // }
// //
// // console.log(chooseOne)
// //
// // //2)Functional
// // //What do I need to do to make sure I am coding in a functional style?
// // // 1. All of your functions must accept at least one paramater/argument.
// // // 2. All of your functions must return data to another function.
// // //3. No Loops!
// // //...What is recursion?
// //
// // function changeToUpperCase (string) {
// //   return string.toUpperCase();
// // }
// // function makeUpperCaseArray (arrayOfStrings, upperCaseArray) {
// //   var upperCaseWord = arrayOfStrings[arrayOfStrings[0]]
// //     remainArray = arrayOfStrings.slice[1]
// //
// //     if (!upperCaseArray) {
// //       upperCaseArray = []
// //     }
// //
// //     upperCaseArray.push(upperCaseWord)
// //
// //     if(remainArray.length > 0) {
// //       return makeUpperCaseArray(remainArray, upperCaseArray)
// //     } else {
// //
// //     }
// // }
// //
// // // var a = [1, 2, 3, 4, 5]
// // // console.log(a.slice(1))
// //
// //
// // function makeUpperCaseMap (arrayOfStrings) {
// //   return arrayOfStrings.map (changeToUpperCase)
// // }
// //
// // console.log(makeUpperCaseMap(chooseOne))
//
//
//
// //take an array, return a new array with
// //double values using map.
// // var a = [1, 2, 3, 4, 5]
// // console.log(a.slice(1))
//
// // var a = [1, 2, 3, 4, 5] {
// //     orginialNumbers: numbers,
// //     doubledNumbers: numbers.map(function (n) { return n * 2; })
// // };
// //
// // console.log(a);
//
// var a = [1, 2, 3, 4, 5]
//
// function doubleNumber(number){
//   return number * 2
// }
//
// function doubleMyNumber(arrayToDouble) {
//   return arrayToDouble.map(doubleNumber)
// }
//
// var B =doubleMyNumber(A)
//
// console.log(A,B);



//reduce
var myBankAccount = 900,
      myPurchases = [8.95, 21.45, 5.99, 19.87, 456.75];

function myPaycheck (runningTotal, purchase) {
  return runningTotal - purchase;
}

var finalResult = myPurchases.reduce (myPaycheck, myBankAccount);

console.log(finalResult, myBankAccount, myBankAccount-finalResult);

//filter
var instructors = [{
  "name": 'Brandon'
  "job": 'Instructor Master Flex'
  "isAvailable": true
  "age": 10
},{
  "name": 'Rob'
  "job": 'Instructor Master Flex'
  "isAvailable": true
  "age": 20
},{
  "name": 'Tony'
  "job": 'Instructor Master Flex'
  "isAvailable": false
  "age": 25
}]

// instructors.filter(function (isAvailable){
//   return isAvailable = true
// })
//
// console.log(isAvailable);

var result = instructors.filter(function(item) {
  // if(item.isAvailable === true) {
    return item.isAvailable === true
});

console.log(items);
