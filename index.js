const emailInput = document.getElementById("email-input");
const signupPage = document.getElementById("signup-page");
const successMsg = document.querySelector(".success-msg");

function myFunction() {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailInput.value.match(validRegex)) {
    successMsg.style.display = "flex";
    signupPage.style.visibility = "hidden";
    successMsg.style.visibility = "visible";
  } else {
    emailInput.style.borderColor = "red";
  }
}

function dismissContent() {
  successMsg.style.display = "none";
  signupPage.style.visibility = "visible";
  successMsg.style.visibility = "hidden";
}
