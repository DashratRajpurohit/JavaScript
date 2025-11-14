const boxes = document.querySelectorAll(".box");
const result = document.getElementById("result");  // <--
const resetBtn = document.getElementById("reset"); // <--

let player = true;



const winner = [

    [0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35],

    [0, 6, 12, 18, 24, 30],
    [1, 7, 13, 19, 25, 31],
    [2, 8, 14, 20, 26, 32],
    [3, 9, 15, 21, 27, 33],
    [4, 10, 16, 22, 28, 34],
    [5, 11, 17, 23, 29, 35],

    [0, 7, 14, 21, 28, 35],
    [5, 10, 15, 20, 25, 30]
];

function checkwinner() {
    for (let data of winner) {
        const [a, b, c, d, e, f] = data;       // <--
        const btn1 = boxes[a].innerHTML;
        const btn2 = boxes[b].innerHTML;
        const btn3 = boxes[c].innerHTML;
        const btn4 = boxes[d].innerHTML;
        const btn5 = boxes[e].innerHTML;
        const btn6 = boxes[f].innerHTML;

        if (btn1 !== "" && btn2 !== "" && btn3 !== "" && btn4 !== "" && btn5 !== "" && btn6 !== "") {
            if (btn1 === btn2 && btn2 === btn3 && btn3 === btn4 && btn4 === btn5 && btn5 === btn6) {
                /*  console.log("The Winner is " + btn1); */
                result.innerText = "🎉 The Winner is " + btn1 + " 🎉";
                boxes.forEach((box) => (box.disabled = true));

            }
        }
    }
};

boxes.forEach((box) => {
    // console.log(box.innerHTML);

    box.addEventListener("click", () => {
        // console.log(box.innerHTML);

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