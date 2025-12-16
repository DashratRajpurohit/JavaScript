let arr = ["hi","hello","a"];
let out =[];
for(let ch in arr){
    let res=0;
    for(let ch2 in arr[ch]){
        res++;
    }
    out.push(res);
    
}
console.log(out);