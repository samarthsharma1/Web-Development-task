let Student={
    Age:21
}
var printage=function (){
    console.log(this.Age);
}
printage.call(Student);