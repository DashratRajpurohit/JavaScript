let str = "banana"
let count = 0;
for(let char of str){
    if(char == 'a' || char == 'A'){
        count++;
    }
}
console.log(count);