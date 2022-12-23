"use strict";
let nameError = false;
let EmailError = false;
let MobileError = false;
let PasswordError = false;
let ConfirmError = false;

document.getElementById("name").onchange = checkName;
document.getElementById("email").onchange= checkEmail;
document.getElementById("phone").onchange = checkMobile;
document.getElementById("password").onchange = checkPassword;
document.getElementById("cpassword").onchange = confirmPassword;

document.getElementById("btn").onclick = function ($event) {
  checkName(),
    checkEmail(),
    checkMobile(),
    checkPassword(),
    confirmPassword();

  if (
    nameError == false &&
    EmailError == false &&
    MobileError == false &&
    PasswordError == false &&
    ConfirmError == false

  )
    alert("data submitted successfully");
  else $event.preventDefault();
};

function checkName() {
  let pattern = /^[a-z_A-Z ]+$/;

  let name = document.getElementById("name").value;
  if (name.length === 0) {
    document.getElementById("spn_name").innerHTML = "Enter name";
    nameError = true;
  } else if (!name.match(pattern)) {
    document.getElementById("spn_name").innerHTML = "Enter valid name";
    document.getElementById("name").style.borderColor="red";
    document.getElementById("spn_name").style.color="red";
    nameError = true;
  } else {
    document.getElementById("spn_name").innerHTML = "";
    document.getElementById("name").style.borderColor="green";
    nameError = false;
  }
}

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
function confirmPassword()
{
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("cpassword").value;

    if(password !== confirmpassword)
        {
           
            document.getElementById("spn_confirmpassword").innerHTML = "Enter correct Password";
            document.getElementById("cpassword").style.borderColor="red";
            document.getElementById("spn_confirmpassword").style.color="red";
            ConfirmError = true;
        }
    else{
            document.getElementById("spn_confirmpassword").innerHTML = "";
            document.getElementById("cpassword").style.borderColor="green";
            ConfirmError = false;

        }

}

