let arr = [1,2,34,5,25,6,7];
let max = arr[0]
let Smax = arr[0];
for(let i=0;i<arr.length;i++){
     if(arr[i]>max){
       max = arr[i];
        
     }
    }

for(let i=0;i<arr.length;i++){
     if(arr[i]>Smax && arr[i]<max){
        Smax =arr[i];
        
       }
     }
console.log("Second Max = "+Smax)
