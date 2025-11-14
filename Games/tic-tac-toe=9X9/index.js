const boxes = document.querySelectorAll(".box");
const result = document.getElementById("result");  
const resetBtn = document.getElementById("reset"); 

let player = true;



const winner = [

    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41, 42, 43, 44],
    [45, 46, 47, 48, 49, 50, 51, 52, 53],
    [54, 55, 56, 57, 58, 59, 60, 61, 62],
    [63, 64, 65, 66, 67, 68, 69, 70, 71],
    [72, 73, 74, 75, 76, 77, 78, 79, 80],


    [0, 9, 18, 27, 36, 45, 54, 63, 72],
    [1, 10, 19, 28, 37, 46, 55, 64, 73],
    [2, 11, 20, 29, 38, 47, 56, 65, 74],
    [3, 12, 21, 30, 39, 48, 57, 66, 75],
    [4, 13, 22, 31, 40, 49, 58, 67, 76],
    [5, 14, 23, 32, 41, 50, 59, 68, 77],
    [6, 15, 24, 33, 42, 51, 60, 69, 78],
    [7, 16, 25, 34, 43, 52, 61, 70, 79],
    [8, 17, 26, 35, 44, 53, 62, 71, 80],


    [0, 10, 20, 30, 40, 50, 60, 70, 80],
    [8, 16, 24, 32, 40, 48, 56, 64, 72]
];

function checkwinner() {
    for (let data of winner) {
        const [a, b, c, d, e, f, g, h, i] = data;       
        const btn1 = boxes[a].innerHTML;
        const btn2 = boxes[b].innerHTML;
        const btn3 = boxes[c].innerHTML;
        const btn4 = boxes[d].innerHTML;
        const btn5 = boxes[e].innerHTML;
        const btn6 = boxes[f].innerHTML;
        const btn7 = boxes[g].innerHTML;
        const btn8 = boxes[h].innerHTML;
        const btn9 = boxes[i].innerHTML;

        if (btn1 !== "" && btn2 !== "" && btn3 !== "" && btn4 !== "" && btn5 !== "" && btn6 !== "" && btn7 !== "" && btn8 !== "" && btn9 !== "") {
            if (btn1 === btn2 && btn2 === btn3 && btn3 === btn4 && btn4 === btn5 && btn5 === btn6 && btn6 === btn7 && btn7 === btn8 && btn8 === btn9) {
                /*  console.log("The Winner is " + btn1); */
                result.innerText = "🎉 The Winner is " + btn1 + " 🎉";
                boxes.forEach((box) => (box.disabled = true));

            }
        }
    }
};

boxes.forEach((box) => {
    

    box.addEventListener("click", () => {
        

        if (player) {
            box.innerHTML = "O";
            player = false;
        }
        else {
            box.innerHTML = "X";
            player = true;
        }
        box.disabled = true;
        checkwinner();

    });
});
resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerHTML = "";
        box.disabled = false;
    });
    result.innerText = "";
    player = true;
});