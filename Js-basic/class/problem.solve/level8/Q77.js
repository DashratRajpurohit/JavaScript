let arr = [1,2,3,4,5];

let res = 0;
let avg = 0;
let count =0;
for(let i =0; i<arr.length;i++){
    res += arr[i]
}
avg = res/arr.length;
console.log("Average = "+avg);
for (let ch of arr){
    if(avg>ch){
        count++;
    }
}
console.log("grater than Avg = "+count);