function myFunction() {
  var emailInput = document.getElementById("email-input");
  var signupPage = document.getElementById("signup-page");
  var successMsg = document.getElementsByClassName("success-msg");

  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailInput) {
    signupPage.style.visibility = "hidden";
    successMsg.style.display = "flex";
    successMsg.style.visibility = "visible";
  }
  // alert("A Button was clicked");
}
