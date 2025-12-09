let str = "ab5c 34d 09e";
let res = "";
for(let char of str){
    if(char >="0" && char<="9"){
       continue;
    }
    res += char;
}
console.log(res);