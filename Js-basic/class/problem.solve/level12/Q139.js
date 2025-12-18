function Harshad(x){
    let i=x;
    let degit =0;
    while(i>0){
        degit = degit+i%10;
        i = Math.floor(i/10);
    }
    return (x%degit==0)?"true":"False";
}
console.log(Harshad(19))