console.log("Hello Manny and Joe ٩(｡•́‿•̀｡)۶	");

const backtoTop = document.getElementById("backtoTop");

function backTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const music = document.getElementById("music");

document.getElementById("music").play();

//Unhandled Promise Rejection: NotAllowedError: The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.
//when muted the music autoplays .. but it's muted. in order to avoid this (as it does not seem to unmute even after interacting with the website, I will simply remove autoplay)
