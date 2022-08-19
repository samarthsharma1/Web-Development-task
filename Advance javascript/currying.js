let multiply= function(x,y)
{
    console.log(x*y);
}
multiplybytwo=multiply.bind(this,2);
multiplybytwo(2);

//2nd method

let multiply1= function(x)
{
    return function(y){
    console.log(x*y);
}
}
multiplybytwo=multiply(2);
multiplybytwo(2);
