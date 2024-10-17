document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("signinButton")
    .addEventListener("click", function () {
      const email = document.getElementById("inputEmail").value;
      const password = document.getElementById("inputPassword").value;
      if (email && password) {
        alert("Sign in successful");
      } else {
        alert("Please fill in both fields");
      }
    });
});
