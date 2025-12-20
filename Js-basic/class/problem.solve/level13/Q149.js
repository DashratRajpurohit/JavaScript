let str = "  hello world  for and"
str = str.trim();
let res = "";
for(let ch of str){
    res =res+ch;
    if(ch==" ")res ="";
}
console.log(res);