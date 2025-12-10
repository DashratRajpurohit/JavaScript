let arr = [1,2,3,4,5,6];
let res = "";
for(let char of arr){
    res += char*2+" ";
}
console.log(res);

console.log("from join "+arr.join(" "));

console.log("sprade",...arr);