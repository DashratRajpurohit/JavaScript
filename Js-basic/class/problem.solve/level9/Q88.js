let n =153;

let arr =String(n).split("");

let res =0;

for(let i=0;i<arr.length;i++){
    res=res+ Number(arr[i])**arr.length;
}
if(n==res){
    console.log("Number is armstrong");
}
else{
    console.log("Number is not armstrong");
}