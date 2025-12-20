let str="Hello@132#aK47*";
let res="";
for(let ch of str){
    if(ch>="a" && ch<="z" || ch>="A" && ch<="Z" || ch>="0" && ch<="9"){
        res+=ch;
    }
}
console.log(res);