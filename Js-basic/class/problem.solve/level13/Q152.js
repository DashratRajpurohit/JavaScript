let str = "the elephant is the ele"
let res =""
let count=0;
for(let ch of str){
    
    if(ch==" "){
        if(res=="the"){
            count++;
        }
        res =""
        continue;
    }
    res =res+ch;
}
console.log(count);