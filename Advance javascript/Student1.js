let Student={
    Age:21
}
function xyz (){
    console.log(this.Age);
}
xyz.call(Student);