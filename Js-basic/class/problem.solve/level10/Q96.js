let obj = {math:50,english:70,science:60};
let sum = 0;
let count = 0;
for(let key in obj){
    sum += obj[key];
    count++;
    
}
console.log(sum/count);