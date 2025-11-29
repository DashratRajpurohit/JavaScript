const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const ageInput = document.getElementById("ageInput");
const submitBtn = document.getElementById("submitBtn");
const addInput = document.getElementById("addInput");

submitBtn.addEventListener("click", () => {
    if (nameInput.value === "") {
        nameInput.style.background = "#ffe5e5ff"
        nameInput.style.border = "2px solid red"
        // alert('Please Enter the Name');
        // setTimeout(function () {
        //     nameInput.style.background = "#ffffffff"
        //     nameInput.style.border = "1px solid gray"
        // }, 2000)
        return;
    }
   else if (nameInput.value === "") {
        emailInput.style.background = "#ffe5e5ff"
        emailInput.style.border = "2px solid red"
        // alert('Please Enter the email');
    }
    if (nameInput.value === "") {
        ageInput.style.background = "#ffe5e5ff"
        ageInput.style.border = "2px solid red"
        // alert('Please Enter the age');
    }
    if (nameInput.value === "") {
        addInput.style.background = "#ffe5e5ff"
        addInput.style.border = "2px solid red"
        // alert('Please Enter the address');
    }
    else {
        submitBtn.style.background = "green";
    }
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const ageValue = ageInput.value;
    const addValue = addInput.value;

    console.log("Name:", nameValue);
    console.log("Email:", emailValue);
    console.log("Age:", ageValue);
    console.log("Address:", addValue);


    sessionStorage.setItem("name", nameValue);
    sessionStorage.setItem("email", emailValue);
    sessionStorage.setItem("age", ageValue);
    sessionStorage.setItem("Address", addValue);

    console.log("Saved to sessionStorage:", {
        name: sessionStorage.getItem("name"),
        email: sessionStorage.getItem("email"),
        age: sessionStorage.getItem("age"),
        age: sessionStorage.getItem("Address"),
    });
});

nameInput.addEventListener("click", function () {
    if (nameInput.value != "") {
        nameInput.style.background = "#ffffffff";
        nameInput.style.border = "1px solid gray"
    }
})










var email = "abc@gmail.com";
email = email.split("");

var txt = "@gmail.com";
txt = txt.split(""); // split("") --> individual character index assign

// console.log(txt);
var j = 9;

function emailCheck() {
    for (let i = email.length - 1; i >= ((email.length - 1) - (txt.length - 1)); --i) {
        if (email[i] == txt[j]) {
            console.log(email[i] + " both are equal " + txt[j]);
            --j;
        } else {
            j = 9;
            alert("the given email doesn't follow the following format");
            return;
        }
    }
}

emailCheck();