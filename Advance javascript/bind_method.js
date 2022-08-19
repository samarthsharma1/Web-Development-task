let obj={
    firstname: "Samarth", 
    lastname: "Sharma"
}
let print=function(district,state){
    console.log(this.firstname+" "+this.lastname+" "+"from"+" "+state);
}
let printdetails =print.bind(obj,"Bareilly","UP");
printdetails();