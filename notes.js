//1st example!!!!
// function Buildfunctions(){
//   var arr = []
//   for (var i = 0; i <3; i++){
//     arr.push (function(){
//       console.log(i)
//     })
//   }
//   return arr
// }
// var fs = Buildfunctions()
// fs[0]()
// fs[1]()
// fs[2]()

//To fix!!!!
function buildFunctions(){
  var arr = []
  for (var i = 0; i <3; i++){
    arr.push( (function(i){
      console.log(i)
    })(i))
  }
  return arr
}
var fs = buildFunctions()
fs[0]()
fs[1]()
fs[2]()


//2nd example!!!! This is a very important concept.
// function whatToSay (say){
//   return function(name){
//     console.log(name + ' ' + say)
//   }
// }
// var whatup = whatToSay('whatup')
// whatup('tony')
//
// or
//
// function whatToSay (say){
//   return function(name){
//     console.log(name + ' ' + say)
//     return name + ' ' + say
//   }
// }
// var whatup = whatToSay('whatup')
// whatup('tony')

//setTimeout
// setTimeout(function(){console.log('callback')},3000)
//setTimeout(function(){console.log('callback')},5000)
