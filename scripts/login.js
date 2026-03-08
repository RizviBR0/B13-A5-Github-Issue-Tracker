const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");

const signIn = () => {
  if (inputUsername.value == "admin" && inputPassword.value == "admin123") {
    window.location.href = "dashboard.html";
  } else {
    showModal(
      "Invalid Credentials",
      "Please check your username and password.",
      "red",
    );
  }
};
