
// [a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$

let form = document.getElementById("form");
let uname = document.getElementById("uname");
let email = document.getElementById("email");
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
let tandc = document.getElementById("tandc");

var isNameValue = false;
var isEmailValue = false;
var isPass1Value = false;
var isPass2Value = false;
var isTcCheked = false;

uname.addEventListener('keyup', ChekedName)
email.addEventListener('keyup', ChekedEmail)
pass1.addEventListener('keyup', ChekedPass1)
pass2.addEventListener('keyup', ChekedPass2)

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
    let unamevalue = uname.value.trim();
    let emailvalue = email.value.trim();
    let pass1value = pass1.value.trim();
    let pass2value = pass2.value.trim();
    let tandcvalue = tandc.value;

    isNameValue = false;
    isEmailValue = false;
    isPass1Value = false;
    isPass2Value = false;
    isTcCheked = false;

    ChekedName()
    ChekedEmail()
    ChekedPass1()
    ChekedPass2()
    CheckTC()


    if (isNameValue && isEmailValue && isPass1Value && isPass2Value && isTcCheked) {
        form.submit();
    }
}

function ChekedName() {
    let unamevalue = uname.value.trim();
    if (unamevalue === "") {
        setError(uname, "Username can not be empty")
    } else if (unamevalue.length < 3) {
        setError(uname, "Username must be 3 charecters")
    } else {
        setSuccess(uname)
        isNameValue = true
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

function ChekedPass2() {
    let pass2value = pass2.value.trim();
    let pass1value = pass1.value.trim();
    if (pass2value === "") {
        setError(pass2, "confirm password can not be empty")
    } else if (pass2value !== pass1value) {
        setError(pass2, "Password and confirm password must be same")
    }
    else {
        setSuccess(pass2)
        isPass2Value = true
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


