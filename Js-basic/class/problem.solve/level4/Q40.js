let str = "ban an  a- hello"
let res = ""
for(let char of str){
    if(char != ' '){
        res +=char;
    }
}
console.log(res);