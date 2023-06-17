// $('#blogCarousel').carousel({
//     interval: 3
// });

// [a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$

let form = document.getElementById("form");
let email = document.getElementById("email");
let pass1 = document.getElementById("pass1");
let tandc = document.getElementById("tandc");

var isEmailValue = false;
var isPass1Value = false;
var isTcCheked = false;

email.addEventListener('keyup', ChekedEmail)
pass1.addEventListener('keyup', ChekedPass1)


form.addEventListener("submit", (e) => {
    e.preventDefault();
    Validate();
});

function setError(input, message) {
    let parent = input.parentElement;
    small = parent.querySelector("small")
    small.innerText = message;
    parent.classList.add('error')
    parent.classList.remove('success')
}

function setSuccess(input) {
    let parent = input.parentElement;
    parent.classList.add('success')
    parent.classList.remove('error')
}

function emailCheck(input) {
    let emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let valid = emailReg.test(input)
    return valid;
}

function Validate() {
    let emailvalue = email.value.trim();
    let pass1value = pass1.value.trim();
    let tandcvalue = tandc.value;


    isEmailValue = false;
    isPass1Value = false;
    isTcCheked = false;


    ChekedEmail()
    ChekedPass1()
    CheckTC()


    if (isEmailValue && isPass1Value && isTcCheked) {
        form.submit();
    }
}

function ChekedEmail() {
    let emailvalue = email.value.trim();
    if (emailvalue === "") {
        setError(email, "email can not be empty")
    } else if (!emailCheck(emailvalue)) {
        setError(email, "Enter valid email")
    } else {
        setSuccess(email)
        isEmailValue = true
    }
}

function ChekedPass1() {
    let pass1value = pass1.value.trim();
    if (pass1value === "") {
        setError(pass1, "Password can not be empty")
    } else if (pass1value.length < 6) {
        setError(pass1, "Password Must be 6 charecters")
    } else {
        setSuccess(pass1)
        isPass1Value = true
    }
}

function CheckTC() {
    let tandcvalue = tandc.value;
    if (!tandc.checked) {
        setError(tandc, "Please click on checkbox")
    } else {
        setSuccess(tandc)
        isTcCheked = true;
    }
}