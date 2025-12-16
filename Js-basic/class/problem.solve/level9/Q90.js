let arr = ["hi","hello","a"];
let max=arr[0];

for(let ch in arr){
    let res=0;
    for(let ch2 in arr[ch]){
        res++;
        if(max.length<res){
            max =arr[ch];
        }
    }
}
console.log(max);
