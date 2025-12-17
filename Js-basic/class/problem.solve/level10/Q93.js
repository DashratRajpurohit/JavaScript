let arr ="hello";
let obj ={}

for(let ch of arr){
    if(obj[ch]==undefined){
        obj[ch]=1;
    }
    else{
        obj[ch]++
    }
}
console.log(obj);