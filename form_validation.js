"use strict";
let nameError = false;
let EmailError = false;
let MobileError = false;
let PasswordError = false;
let ConfirmError = false;

document.getElementById("email").onchange= checkEmail;
document.getElementById("phone").onchange = checkMobile;
document.getElementById("password").onchange = checkPassword;

document.getElementById("btn").onclick = function ($event) {
    checkEmail(),
    checkMobile(),
    checkPassword();
};

function checkEmail() {
  let pattern = /^[a-z0-9.]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  let email = document.getElementById("email").value;
  if (email.length === 0) {
    document.getElementById("spn_email").innerHTML = "Enter email";
    EmailError = true;
  } else if (!email.match(pattern)) {
    document.getElementById("spn_email").innerHTML = "Enter valid email";
    document.getElementById("email").style.borderColor="red";
    document.getElementById("spn_email").style.color="red";
    EmailError = true;
  } else {
    document.getElementById("spn_email").innerHTML = "";
    document.getElementById("email").style.borderColor="green";
    EmailError = false;
  }
}

function checkMobile() {
  let pattern = /^[0-9]{10}$/;
  let mobile = document.getElementById("phone").value;

  if (mobile.length === 0) {
    document.getElementById("spn_mobile").innerHTML = "Enter mobile";
    MobileError = true;
  } else if (!mobile.match(pattern)) {
    document.getElementById("spn_mobile").innerHTML = "Enter valid mobile";
    document.getElementById("phone").style.borderColor="red";
    document.getElementById("spn_mobile").style.color="red";
    MobileError = true;
  } else {
    document.getElementById("spn_mobile").innerHTML = "";
    document.getElementById("phone").style.borderColor="green";
    MobileError = false;
  }
}

function checkPassword()
{
    let pattern = /^[a-z_A-Z_0-9]+$/;
    let password = document.getElementById("password").value;

    if (password.length < 4 ) {
        document.getElementById("spn_password").innerHTML = "Password should be more than 4 digits";
        document.getElementById("password").style.borderColor="red";
        document.getElementById("spn_password").style.color="red";
        PasswordError = true;
      } else if (!password.match(pattern)) {
        document.getElementById("spn_password").innerHTML = "Enter valid Password";
        document.getElementById("password").style.borderColor="red";
        document.getElementById("spn_password").style.color="red";
        PasswordError = true;
      } else {
            document.getElementById("spn_password").innerHTML = "";
            document.getElementById("password").style.borderColor="green";
            PasswordError = false;
        }

}
function handleSignIn()
{
  window.location.href="./Guest/html/index.html";
}
function handleSignUp()
{
  window.location.href="./SignUp/index.html";
}