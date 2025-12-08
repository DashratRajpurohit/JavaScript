let str = "ababa";
let res= str.split("").reverse().join("");
console.log((str==res)? "true":"false");

let res2 ="";

for(let i = str.length-1; i>=0; i--){
    res2 += str[i];
}
console.log((str==res2)? "true":"false");
