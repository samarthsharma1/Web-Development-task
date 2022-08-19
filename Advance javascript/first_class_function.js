 /*var b =function a(x)
 {
    console.log(x);
 }
 b(function(){

 })  
// 2nd Method
var b =function a(x)
 {
    console.log(x);
 }
 function xyz()
 {

 }
 b(xyz);  
 3rd Method */
 var b =function a(x)
 {
    return function xy(){

    }
 }
console.log(b(b()));
