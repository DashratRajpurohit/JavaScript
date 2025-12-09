let arr = [1,2,35,4,5,6];
let max = arr[0];
for(let i=0;i<arr.length;i++){
   if(arr[i]>max){
    max = arr[i];
   }
}
console.log(max);

// sprade 
let res = Math.max(...arr);

console.log("sprad "+res);