let arr1 =[1,1,1,2,3,4,5]
let arr2 =[4,4,5,1,1,6]



let res1 =[];

for(let i=0;i<arr1.length;i++){
    if(arr2.includes(arr1[i])&& !(res1.includes(arr1[i]))){
        res1.push(arr1[i])
    }
}
console.log(res1)

let res = [];

arr1= arr1.sort((a,b)=>a-b);
arr2= arr2.sort((a,b)=>a-b);

let i =0;
let j =0;

while(i<arr1.length && j< arr2.length){
    if(arr1[i]==arr2[j]){
        res.push(arr1[i]);
        i++;
        j++;
    }
    else if(arr1[i]>arr2[j]){
        j++;
    }
    else{
        i++;
    }
}
console.log(res)