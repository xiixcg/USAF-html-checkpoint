var loggedIn = false;
if (!loggedIn) {
  $(function () {
    $("#login-placeholder").load("login.html");
  });

  let loginBtn = document.getElementById(".btn-primary");

  console.log('loginBtn' + loginBtn);

  loginBtn.hidden = true;
}
document.getElementById("home-button").addEventListener("click", function () {
  $(function () {
    $("#home-placeholder").load("home.html");
  });
});

document.getElementById(".login-button").addEventListener("click", function () {
  console.log("clicked")
  $(function () {
    $("#login-placeholder").load("login.html");
  });
});

