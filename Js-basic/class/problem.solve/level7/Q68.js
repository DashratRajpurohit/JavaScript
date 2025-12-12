let arr = [1,2,34,5,6,7];

for(let i=1;i<arr.length;i++){
     if(arr[i]<arr[i-1]){
        console.log("Array is not Sorted")

        return;
     }
}
console.log("Array is Sorted")

console.log(arr.sort((a, b) => a - b));