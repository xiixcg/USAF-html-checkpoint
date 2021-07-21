var loggedIn = false
if (!loggedIn){
  $(function(){
    $("body").load("login.html");
  });
} else {
  $(function(){
    $("body").load("home.html");
  });
}