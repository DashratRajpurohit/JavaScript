function larg(x) {
    let max = Infinity;
    let i = x;
    while (i > 0) {
        let degit = i % 10;
        if (degit < max)max = degit;
        
        i =Math.floor(i/10);
    }
    return max;
}

let n = 958163;
console.log(larg(n));