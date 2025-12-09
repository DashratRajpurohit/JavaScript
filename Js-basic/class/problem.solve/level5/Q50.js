let str = "Hello 152 World";
let res ="";
for(let i=0;i<str.length;i++){
    let Ac = str.charCodeAt(i);

    if(Ac >="65" && Ac<="91"){
        Ac +=32;
    }
    else if(Ac >="97" && Ac<="123"){
        Ac -=32;
    }
    let char = String.fromCharCode(Ac);
    res +=char;
}
console.log(res);