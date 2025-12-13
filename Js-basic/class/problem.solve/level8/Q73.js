let arr1 =[1,2,3]
let arr2 =[4,5,6]

console.log(arr1.concat(arr2));

let res = [...arr1,...arr2];

console.log(res);

let res2 = [];
for(let ch of arr1){
    res2.push(ch)
}
for(let ch of arr2){
    res2.push(ch)
}
console.log(res2);