var score = 0;
var myMusic = document.getElementById("music");
var isRunning = false;
var tiles = InitTab();

$("body").keypress(GameLogic);
$("#play").click(Main);
$("#score").text("Score : " + score);


function Main() {

    if (!isRunning) {
      score = 0;
      $("#score").text("Score : " + score);
      isRunning = true;
      myMusic.volume = 0.5;
      myMusic.play();

    for (var i = 0; i < tiles.length; i++){
      window.setTimeout(LaunchGame, 400 * i, i, tiles);
    }
  }
}

function LaunchGame(id, tiles) {
  for (var i = 0; i < tiles.length; i++) {
    window.setTimeout(InitLine, 400 * i, id, tiles[i]);
  }
}

function InitLine(id, tile) {
  for (var i = 0; i < tile.length; i++) {
    if (tile[i] === 1) {
      if (isRunning === true) {
        ChangeColor("#line-" + id + "-" + (i + 1), i + 1);
      }
    } else if (tile[i] === 2) {
      isRunning = false;
      $("#result").text("Bien Joué !");
    }else {
      ClearColor("#line-" + id + "-" + (i + 1));
    }
  }
}

function Rng(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function InitTab() {
  var newTab = [];

  for (let i = 0; i < 151 ; i++) {
    newTab.push([Rng(2),Rng(2),Rng(2),Rng(2)]);
  }
  for (let i = 0; i < 10 ; i++) {
    newTab.push([0,0,0,0]);
  }
  newTab.push([2,2,2,2]);

  return newTab
}

function ChangeColor(id, nb) {
  if (nb === 1) {
           $(id).css("background-color", "rgb(104, 4, 4)");
      } else if (nb === 2) {
           $(id).css("background-color", "rgb(254, 19, 16)");
  }else if (nb === 3) {
       $(id).css("background-color", "rgb(224, 223, 229)");
  }else if (nb === 4) {
       $(id).css("background-color", "rgb(9, 47, 0)");
  }
}

function ClearColor(id) {
    $(id).css("background-color", "transparent");
}

function GameLogic(event) {
    if (isRunning == true) {

        if (event.keyCode == 97 ) {
            if ($("#line-9-1").css("background-color") === "rgb(104, 4, 4)") {
                score += 100;
             } else {
          score -= 50; }
            $("#line-9-1").css("background-color", "white");
        } else if (event.keyCode == 122 ) {
            if ($("#line-9-2").css("background-color") === "rgb(254, 19, 16)") {
                score += 100;
             } else {
          score -= 50; }
            $("#line-9-2").css("background-color", "white");
        } else if (event.keyCode == 101 ) {
            if ($("#line-9-3").css("background-color") === "rgb(224, 223, 229)") {
                score += 100;
             } else {
          score -= 50; }
            $("#line-9-3").css("background-color", "white");
        } else if (event.keyCode == 114 ) {
            if ($("#line-9-4").css("background-color") === "rgb(9, 47, 0)") {
                score += 100;
             } else {
          score -= 50; }
            $("#line-9-4").css("background-color", "white");
        }
    }
    $("#score").text("Score : " + score);
    window.setTimeout(ClearColor, 100, "#line-9-1");
    window.setTimeout(ClearColor, 100, "#line-9-2");
    window.setTimeout(ClearColor, 100, "#line-9-3");
    window.setTimeout(ClearColor, 100, "#line-9-4");
}
