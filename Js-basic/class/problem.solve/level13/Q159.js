let str1 = "Dormitory";
let str2 = "Dirty room";
let count = 0;
for (let ch1 of str1) {
    if (ch1 == " ") continue;
    for (let ch2 of str2) {
        if (ch2 == " ") continue;
        if (ch1 == ch2) {
            count++;
            break;
        }
    }
    console.log(count);
}

console.log((count==str1.length)?"true":"false");