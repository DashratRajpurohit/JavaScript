let str = "banana";
let res =""
let res2 = str.replaceAll("a","e").replace('a','e')
for(let char of str){
   if(char =='a' ||char =='A'){
    char = 'e';
   }
   res +=char;
}
console.log(res);
console.log(res2);