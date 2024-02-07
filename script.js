let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let eyecon = document.querySelector(".eye-icon");
let eyecon2 = document.querySelector(".eye-icon2");

eyecon.addEventListener("click", function () {
  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
    eyecon.setAttribute("name", "eye-off-outline");
  } else {
    password.setAttribute("type", "password");
    eyecon.setAttribute("name", "eye-outline");
  }
});
eyecon2.addEventListener("click", function () {
  if (password2.getAttribute("type") == "password") {
    password2.setAttribute("type", "text");
    eyecon2.setAttribute("name", "eye-off-outline");
  } else {
    password2.setAttribute("type", "password");
    eyecon2.setAttribute("name", "eye-outline");
  }
});

// Card swipe

let logincard = document.querySelector(".login-container");
let signupcard = document.querySelector(".signup-container");

let loginToggle = document.querySelector(".loginToggle");
let signupToggle = document.querySelector(".signupToggle");

// loginToggle.addEventListener("click", (event) => {
//   event.preventDefault();
//   logincard.style.zIndex = "2";
//   signupcard.style.zIndex = "1";
// });
// signupToggle.addEventListener("click", () => {
//   signupcard.style.zIndex = "2";
//   logincard.style.zIndex = "1";
// });

function signtoggle() {
  logincard.style.zIndex = "1";
  signupcard.style.zIndex = "2";
}

function logtoggle() {
  signupcard.style.zIndex = "1";
  logincard.style.zIndex = "2";
}
