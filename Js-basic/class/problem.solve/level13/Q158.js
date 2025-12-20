let str = "the elephant ias thats eleasd"
let count2 = 0;
let count = 0;
for (let ch of str) {
    count++;
    if (ch == " ") {
        if (count >= 5) {
            count2++;
        }
        count = 0;

    }
}
if (count >= 5) {
    count2++;
}
console.log(count2);