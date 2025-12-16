let arr =[1,2,2,3,4,2];
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