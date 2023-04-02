function hd() {
    document.documentElement.requestFullscreen();
    let list = ["db_1.mp4", "db_2.mp4", "db_3.mp4", "db_4.mp4", "db_5.mp4"];
    document.body.innerHTML += `<video src=".././img/${
      list[getRandomInt(0, list.length - 1)]
    }" play loop muted id="danc"></video>`;
    document.querySelector("#danc").muted = false;
    document.querySelector("#danc").play();
    document.getElementById("lol").classList.add("hide");
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
  function loaded() {
    document.querySelector(".loading").style = "transform: translateY(-100vh)";
  }
  
