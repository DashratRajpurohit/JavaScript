let input = "Hello world";
let res = ""
for (let i = 0; i < input.length; i++) {
    let ascii = input.charCodeAt(i);
    if (((ascii >= 97 && ascii <= 122))) {
        ascii -=32;
        // console.log(ascii)
    }
        let char = String.fromCharCode(ascii);
        res += char
}
 console.log(res);