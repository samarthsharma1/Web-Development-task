var obj={
    key1:'value1',
    key2:'value2'
}
var obj2={...obj,key1:'value4'}
console.log(obj2);

const arr1 =[{a:1},2];
const arr2 =[3,{d:4}];
const obj1={e:5}
const arr3=[...arr1,...arr2,{...obj1}]
console.log(arr3);