let arr = [-5, -1, 3, 7, -2]

let max = Math.max(...arr);
let min = Math.min(...arr);

console.log(max>0 ? max : null);
console.log(min<0 ? min : null);

max = -Infinity;
min = Infinity;
for(let ch of arr){
    if(ch>max){
        max = ch;
        if(max <=0){
            max = null;
        }
    }
    if(ch<min){
        min = ch;
        if(min >0){
            min = null;
        }
    }
}
console.log("Max = "+max+ "\nMin = "+min)