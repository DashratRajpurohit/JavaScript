let arr = [1,2,3,4,5,6,7,8,9];

let even = [];
let odd = [];
let counte = 0;
let counto = 0;
for(let ch of arr){
    if(ch%2==0){
        even[counte] =ch;
        counte++;
    };
    if(ch%2==1){
        odd[counto] =ch;
        counto++;
    }
}
console.log(even);
console.log(odd);