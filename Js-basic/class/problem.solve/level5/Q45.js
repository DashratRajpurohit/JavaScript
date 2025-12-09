let str = "abb5c 34";
let count = 0;
for(let char of str){
    if(char >="0" && char<="9"){
        count++;
    }
}
console.log(count);
