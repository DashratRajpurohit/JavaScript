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
let mxC=0;
let mxV=0;
for(let n in obj){
    if(obj[n]>mxV){
        mxC=n;
        mxV=Number(n);
    }
}
console.log(mxV);