let arr = [34,5,25,6,1,7];
let max = Infinity
let Smax = Infinity;

let min1 = Infinity
let Smin1 = Infinity;

for(let i=0;i<arr.length;i++){
     if(arr[i]<max){
       max = arr[i];
        
     }
    }

for(let i=0;i<arr.length;i++){
     if(arr[i]<Smax && arr[i]>max){
        Smax =arr[i];
        
       }
     }
console.log("Second small = "+Smax)

for(let i=0;i<arr.length;i++){
     if(arr[i]<min1){
       Smin1 = min1;
       min1 = arr[i];
     }
     else if(arr[i]<Smin1 && arr[i]>min1){
            Smin1=arr[i];
     }
    }
    console.log("Second small = "+Smin1)
