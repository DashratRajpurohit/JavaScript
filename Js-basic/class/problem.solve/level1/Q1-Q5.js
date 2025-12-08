function even(n){
    if(n%2 ===0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}

even(20);

function max(n1,n2){
    console.log("Grater no ="+Math.max(n1,n2))
}
max(10,20);

function max2(a1,a2,a3){
    // let a4 = Math.max(a1,a2)
    // console.log(Math.max(a4,a3));
    if(a1>a2 && a1>a3){
        console.log("Grater no ="+a1);
    }
    else if(a2>a3){
        console.log("Grater no ="+a2);
    }
    else{
        console.log("Grater no ="+a3);
    }
}

max2(10,11,1);

function pnz(num){
    if(num >0){
        console.log("positive");
    }
    else if(num === 0){
        console.log("ZEROooo");
    }
    else{
        console.log("Negtive");
    }
}
pnz(-5)
pnz(42)
pnz(0)

function age(a1){
    if(a1< 8) console.log("child");
    else if(a1>8 && a1<15) console.log("teenager");
    else console.log("adult") ;
}
age(82)

