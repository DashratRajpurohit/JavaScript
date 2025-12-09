let str = "abbHeLLo";
let res ="";
for(let char of str){
    if( char =="a" || char == "e" || char == "i" || char == "o" || char == "u" ){
        continue;
    }
    res +=char
}
console.log(res);
