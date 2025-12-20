let str = "hello world "
let res = "";
for(let ch of str){
    res =res+ch;
    if(ch==" ")break;
}
console.log(res);