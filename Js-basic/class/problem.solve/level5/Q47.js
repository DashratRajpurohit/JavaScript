let str = "abbHeLLo";
let count = 0;
for(let i=0;i<str.length;i++){
    let asci = str.charCodeAt(i)
    if(asci >=97 && asci<=123){
        count++;
    }
}
console.log(count);
