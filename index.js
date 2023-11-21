function myFunction() {
  const emailInput = document.getElementById("email-input");
  const signupPage = document.getElementById("signup-page");
  const successMsg = document.querySelector(".success-msg");
  const emailValue = document.querySelector("strong");
  const errorColor ="#FFCCCB";
  const errorMsg = document.querySelector("#errorMsg");
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailInput.value.match(validRegex)) {
    successMsg.style.display = "flex";
    signupPage.style.visibility = "hidden";
    successMsg.style.visibility = "visible";
    emailValue.innerHTML= emailInput.value;
  } else {
    errorMsg.style.display = "flex";
    emailInput.style.borderColor = "red";
    emailInput.style.color = "red";
    emailInput.style.backgroundColor = errorColor;
  }
}

function dismissContent() {
    window.location.reload("Refresh");
}
