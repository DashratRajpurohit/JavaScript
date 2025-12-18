function gdc(a ,b){
    let result = 1;
    for(let i=1;i<=Math.min(a,b);i++){
        if(a%i===0 && b%i===0){
            result = i;
        }
    }
    return result==1? "true":"false";
}
console.log(gdc(8,15));