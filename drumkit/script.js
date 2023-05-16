let audio = document.querySelectorAll("audio");
let aaa
document.addEventListener("mousedown", function (event) {
  event.preventDefault();
  let target = event.target;
  if (target.dataset.audioId !== undefined) {
    if (target.tagName == "H2") {
      target = target.parentElement;
    }
    //
    target.style.background = "yellow";
    document.addEventListener(
      "mouseup",
      function () {
        target.style.background = "";
      },
      { once: true }
    );
    //
    audio[target.dataset.audioId].play();
  }
});
document.addEventListener("keydown", function (event) {
  aaa = event.key;
  switch (aaa) {
    case "a":
      aaa = 0;
      break;
    case "s":
      aaa = 1;
      break;
    case "d":
      aaa = 2;
      break;
    case "f":
      aaa = 3;
      break;
    case "g":
      aaa = 4;
      break;
    case "h":
      aaa = 5;
      break;
    case "j":
      aaa = 6;
      break;
    case "k":
      aaa = 7;
      break;
    case "l":
      aaa = 8;
      break;
      default:return
  }
audio[aaa].play()
aaa = document.querySelector(`div[data-audio-id="${aaa}"]`)
aaa.style.background = "yellow"

});

document.addEventListener("keyup", function (event) {
    aaa.style.background = ""
})