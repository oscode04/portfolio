import Typed from "../library/node_modules/typed.js/src/typed.js";
var typed = new Typed(".test", {
  // Waits 1000ms after typing "First"
  strings: [
    " Hello 👋, I'm Front-End Developer",
    " And I'm a Student from IDS",
  ],
  typeSpeed: 80,
  backSpeed: 30,
  backDelay: 1000,
  loop: true,
  loopCount: Infinity,
});
