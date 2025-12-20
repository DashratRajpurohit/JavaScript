let str = "is love Coding";
let count=0;
let max= Infinity;
for(let ch of str){
    if(ch==" "&& ch==0){
        if(count<max){
        max = count;
        count =0;
        continue;
        }
    }
    count++;
}
if(count<max)max=count;
console.log(max);