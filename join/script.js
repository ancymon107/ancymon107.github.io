function hd() {
  document.querySelector("#danc").muted = false;
  document.querySelector("#danc").play();
  document.getElementById("lol").classList.add("hide");
}
function loaded() {
  document.querySelector(".loading").style = "transform: translateY(-100vh)";
}
