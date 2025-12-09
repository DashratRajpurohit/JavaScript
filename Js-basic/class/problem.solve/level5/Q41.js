let str = "hello        world          k            lll                    "

let count = 0;
for(let i = 0; i< str.length;i++){
    if(i===0&& str[i]!=" "){
        count++;
    }
    else if(str[i] !=" " && str[i-1]==" "){
        count++
    }
}
console.log(count);