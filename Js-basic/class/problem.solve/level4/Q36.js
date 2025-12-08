let input = "HeLLo world By";
let res = ""
for (let i = 0; i < input.length; i++) {
    let ascii = input.charCodeAt(i);
    if (((ascii >= 65 && ascii <= 91))) {
        ascii +=32;
        // console.log(ascii)
    }
        let char = String.fromCharCode(ascii);
        res += char
}
 console.log(res);