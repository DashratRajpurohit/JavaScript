let arr = [-5,-1,-3,-7,-2]

let max = -Infinity;
let min = Infinity;
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