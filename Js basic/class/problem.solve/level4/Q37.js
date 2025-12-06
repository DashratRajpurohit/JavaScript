let str = "edcba";

// let arr = str.split("")
// arr.reverse();
// let res2 = arr.join("")
let res2 = str.split("").reverse().join("");
console.log("by in-build method = "+res2)

let res="";
for(let i = str.length-1; i>=0; i--){
    res += str[i];
}
console.log("without in-build method = "+res);