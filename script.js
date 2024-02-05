let password = document.getElementById("password");
let eyecon = document.querySelector(".eye-icon");

eyecon.addEventListener("click", function () {
  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
    eyecon.setAttribute("name", "eye-off-outline");
  } else {
    password.setAttribute("type", "password");
    eyecon.setAttribute("name", "eye-outline");
  }
});
