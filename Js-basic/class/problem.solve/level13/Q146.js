let str = "   js ? hello  ?  bro?";
let res ="";
for(let ch of str){
    if(ch == "?")res=res+'!';
    else{
        res =res+ch;
    }
}
console.log(res);