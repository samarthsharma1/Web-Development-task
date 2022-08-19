let obj={
    firstname: "Samarth", 
    lastname: "Sharma"
}
let print=function(state){
    console.log(this.firstname+" "+this.lastname+" "+"from"+" "+state);
}
print.call(obj,"UP");