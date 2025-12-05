let str ="Javascript"
let str2=str.toLocaleLowerCase();

let obj={
    a:1,
    e:1,
    i:1,
    o:1,
    u:1
}

let count=0;

for(let char of str2){
    if(obj[char]==1){
        
    }
    else{
        count++;
    }
}
console.log(count);
