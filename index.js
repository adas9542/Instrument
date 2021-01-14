var drumkeys = document.querySelectorAll(".drum");
var crash = new Audio('sounds/crash.mp3');
var kick_bass = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/snare.mp3');
var tom_1 = new Audio('sounds/tom-1.mp3');
var tom_2 = new Audio('sounds/tom-2.mp3');
var tom_3 = new Audio('sounds/tom-3.mp3');
var tom_4 = new Audio('sounds/tom-4.mp3');

var sounds = [crash,kick_bass,snare,tom_1,tom_2,tom_3,tom_4];

for (let i = 0; i < drumkeys.length; i++) {
  drumkeys[i].addEventListener("click", function () {
    sounds[i].play();
    button_animate(drumkeys[i].innerHTML);
    })
  document.addEventListener("keydown", function(event) {
    if(event.key == drumkeys[i].className[0]){
      sounds[i].play();
      button_animate(event.key);
    }
  })
}

function button_animate(input){
  document.querySelector("." + String((input))).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + String((input))).classList.remove("pressed");
  }, 100);
}
