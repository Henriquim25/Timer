import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { elements } from "./elements.js";

const {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop,
  minutesDisplay,
  secondsDisplay  
} = elements

let minutes = Number(minutesDisplay.textContent);

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  minutes,
});

buttonPlay.addEventListener("click", function () {
  controls.play();
  timer.hold()
  timer.countdown();
});
buttonPause.addEventListener("click", function () {
  controls.pause();
  timer.hold()
});

buttonStop.addEventListener("click", function () {
  controls.reset();
  timer.reset();
});

buttonSet.addEventListener("click", function () {
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    timer.reset();
    return;
  }

  minutes = newMinutes;
  timer.updateDisplay(minutes, 0);
  timer.updateMinutes(minutes)
});
