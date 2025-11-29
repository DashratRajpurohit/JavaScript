let num = 153;
let digits = [];
let sum = 0;

let tempNum = num;

while (tempNum > 0) {
  digits.push(tempNum % 10);
  tempNum = Math.floor(tempNum / 10);
}

let power = digits.length;

for (let d of digits) {
  sum += d ** power;
}

console.log(sum);
console.log(sum === num ? "Armstrong" : "Not Armstrong");
 