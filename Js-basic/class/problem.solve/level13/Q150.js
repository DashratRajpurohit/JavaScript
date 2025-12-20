let str = "i love Coding";
let count=0;
let max= 0;
for(let ch of str){
    if(ch==" "){
        if(count>max){
        max = count;
        count =0;
        continue;
        }
    }
    count++;
}
if(count>max)max=count;
console.log(max);