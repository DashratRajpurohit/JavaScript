function grade2(q1){
    if(q1>=90 && q1<=100){
        console.log("A");
    }
    else if(q1>=80){
        console.log("B");
    }
    else if(q1>=70){
        console.log("C");
    }
    else if(q1>=60){
        console.log("D");
    }
    else if(q1>=0){
        console.log("Fail");
    }
    else{
        console.log("invalid")
    }
}
function grade(q1){
    switch(true){
        case (q1>=90 && q1<=100):
            console.log("A")
            break;
        
        case (q1>=80):
            console.log("B")
            break;
        
        case (q1>=70):
            console.log("C")
            break;
        
        case (q1>=60):
            console.log("D")
            break;
        
        case (q1>=0):
            console.log("Fail")
            break;
        
        default :
            console.log("invalid numbers")
            break;
        
    }
}
grade(99);
grade2(59);


function q7(num){
    if(num%5===0){
        console.log("divisible by 5")
    }
    else{
        console.log("not divisible by 5")
    }
}
q7(1510)


function q8(num){
    if(num%5===0 && num%3===0){
        console.log("divisible by 3 and 5")
    }
    else{
        console.log("not divisible by 3 and 5")
    }
}
q8(150)

function q9(num){
    if(num%400===0 || num%4===0){
        console.log("Leap Year")
    }
    else{
        console.log("not a Leap Year")
    }
}
q9(2024)


function q10(num){
    if(num>=10 && num<=50){
        console.log("In Range")
    }
    else{
        console.log("Out Of Range")
    }
}
q10(15)

