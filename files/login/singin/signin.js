document
  .getElementById("user-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("user-email").value.trim();
    const password = document.getElementById("user-password").value.trim();
    const errorMessage = document.getElementById("error-message");

    console.log(email, password);

    if (!email || !password) {
      errorMessage.textContent = "Both email and password are required.";
    } else {
      alert("success");
      window.location.href = "../../../index.html";
    }
  });
