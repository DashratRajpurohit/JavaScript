let arr = [1,2,34,5,25,6,7];
let max = -Infinity
let Smax = -Infinity;


// for(let i=0;i<arr.length;i++){
//      if(arr[i]>max){
//        max = arr[i];
        
//      }
//     }

// for(let i=0;i<arr.length;i++){
//      if(arr[i]>Smax && arr[i]<max){
//         Smax =arr[i];
        
//        }
//      }


for(let i=0;i<arr.length;i++){
     if(arr[i]>max){
       Smax = max;
       max = arr[i];
     }
     else if(arr[i]>Smax && arr[i]<max){
            Smax=arr[i];
     }
    }


console.log("Second Max = "+Smax)
