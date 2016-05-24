//#1--Write a function called 'tripleFive' which loops three times using a for loop.
//Each iteration of the loop, output 'Five!' using console.log.
//tripleFive()
//Five! Five! Five!

var tripleFive = function() {
    for(var i = 0; i < 3; i++){
    console.log("Five!")
  }
}
tripleFive()

//#2--Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.
//lastLetter('hello') should return 'o'
//lastLetter('island') should return 'd'

var lastLetter = function(str) {
	return str[str.length-1];
};

console.log( lastLetter('hello'))
console.log( lastLetter('island'))

//#3--Write a function called 'square' which takes a single argument which is a number, and returns number * number.
//square(3) should return 9
//square(5) should return 25

var square = function(num){
	return num * num;
};

console.log(square(3))
console.log(square(5))

//#4--Write a function called 'negate' which takes a single number argument and returns the negative of that number.
//negate(5) should return -5
//negate(-8) should return 8

var negate = function(num){
    return -num
}

console.log(negate(5))
console.log( negate(-8))

//#5--Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.
//toArray(1, 4, 5) should return [1, 4, 5]
//toArray(8, 9, 10) should return [8, 9, 10]

var toArray = function (a, b, c) {
    return [a, b, c]
}

console.log(toArray(1, 4, 5))
console.log(toArray(8, 9, 10))

//#6--Write a function called 'startsWithA' which takes a single string argument and returns true if the given string's
//first letter is 'A' and false otherwise.
//startsWithA('aardvark') should return true
//startsWithA('bear') should return false

var startsWithA = function (str){
    return str[0] === 'A' || str[0] === 'a'
// return (string[0].toLowerCase() == 'a')
}

console.log(startsWithA('aardvark'))
console.log(startsWithA('Bear'))
console.log(startsWithA('Aguinaga'))

//#7--Write a function called 'excite' which takes a single string argument and returns the given string
//plus three exclamation marks.
//excite('yes') should return 'yes!!!'
//excite('go') should return 'go!!!'

var excite = function (str) {
    return str + '!!!'
}

console.log(excite('yes'))
console.log(excite('go'))

//#8--Write a function called 'sun' which takes a single string argument and returns true if the string contains
//the word 'sun' within it. You may use the indexOf method that is built-in to strings, or you can do it manually with a for loop.
//sun('sundries') should return true
//sun('asunder') should return true
//sun('catapult') should return false

var sun = function(str){
    return str.includes('sun')
};

console.log( sun('sundries'))
console.log( sun('asunder'))
console.log( sun('catapult'))

//#9--Write a function called 'tiny' which takes a single number argument and returns true if the number is between 0 and 1.
//tiny(0.3) should return true
//tiny(14) should return false
//tiny(-5) should return false

var tiny = function(number){
    return number > 0 && number < 1
}

console.log(tiny(0.3))
console.log(tiny(14))
console.log(tiny(-5))

//#10--Write a function called 'getSeconds' which takes a single string argument in the format 'MM:SS'
//(minutes, and seconds) and returns the total number of seconds represented by that timespan.
//getSeconds('01:30') should return 90
//getSeconds('10:25') should return 625

var getSeconds = function(str) {
  var split = str.split(":");
  var mins = parseInt(split[0]);
  var secs = parseInt(split[1]);
  return ((mins * 60) + secs);
 }

console.log( getSeconds('01:30'))
console.log( getSeconds('10:25'))
