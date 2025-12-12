let arr = [1,2,2,9,3,4,2,5,6];
let value = 2;
let count = 0;
for(let i=0;i<arr.length;i++){
    if(value==arr[i]){
        count++;
    }
}
console.log(count)

let obj = {};
for(let ch in arr){
    if(obj[arr[ch]]!=undefined){
        obj[arr[ch]]++
    }
    else{
        obj[arr[ch]]=1;
    }
}
console.log(obj[value]);