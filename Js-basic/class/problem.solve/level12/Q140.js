function Harshad(x){
    let i=x*x;
    let degit = i%10;
    return (x==degit)?"true":"False";
}
console.log(Harshad(5))