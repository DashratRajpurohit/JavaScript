let obj ={apple: 50, banana: 20, mango: 30};
let sum = 0;
    for(let key in obj){
        sum += obj[key];
    }

console.log(sum);