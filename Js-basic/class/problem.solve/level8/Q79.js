let arr = [0,0,1,0,0,1,1,0]

let count0 =0;
let count1 =0;
for(let ch of arr){
    if(ch == 0){
        count0++;
    }
    if(ch == 1){
        count1++;
    }
}
console.log("Zeros = "+count0+"\nOnes = "+count1);