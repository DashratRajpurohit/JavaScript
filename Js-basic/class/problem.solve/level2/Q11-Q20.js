var arr = [];
console.log("Q11......(1 to 10)......");
for(let i=0; i<10; i++){
    arr[i] = i+1
}
console.log(arr);

var n = 5;
console.log("Q12.....(1 to n).......");
for(let i=1; i<=n; i++){
    console.log(i);
}

var n = 10;
console.log("Q13............");
for(let i=1; i<=n; i++){
    if(i%2===0){
        console.log("even = "+i);
    }
}


var n = 10;
console.log("Q14............");
for(let i=1; i<=n; i++){
    if(i%2!==0){
        console.log("odd = "+i);
    }
}


var n = 10;
var sum = 0;
console.log("Q15.....(sum of n).......");
for(let i=1; i<=n; i++){
    sum +=i; 
}
console.log("sum = "+sum);


var n = 5;
var sum = 1;
console.log("Q16.....(product of n).......");
for(let i=1; i<=n; i++){
    sum *=i; 
}
console.log("product = "+sum);


var n = 5;
var sum = 1;
console.log("Q17.....(multi table).......");
for(let i=1; i<=10; i++){
    sum = n*i; 
    console.log(  n+"*"+i+"="+sum);
}


var n = 10;
var count = 0;
console.log("Q18.....(num % 3 then count++).......");
for(let i=1; i<=n; i++){
    if(i%3===0){
        count++;
    }
}
console.log(count)


var n = 5;
var sum = 1;
console.log("Q19.....(Factorial).......");
for(let i=1; i<=n; i++){
    sum *=i; 
}
console.log("Factorial = "+sum);


var n = 3;

console.log("Q20....(n mult of 7).......");
for(let i=1; i<=n; i++){
    console.log(7*i); 
}


