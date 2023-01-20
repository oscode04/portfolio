let landingPage = document.getElementById("sec1");
let aboutMe = document.getElementById("sec2");
let myWork = document.getElementById("sec3");
let mySkill = document.getElementById("sec4");
let contactMe = document.getElementById("sec5");

fetch("../pages-html/landing-page.html")
  .then((snap) => snap.text())
  .then((result) => {
    landingPage.innerHTML = result;
  });

fetch("../pages-html/about-me.html")
  .then((snap) => snap.text())
  .then((result) => {
    aboutMe.innerHTML = result;
  });

fetch("../pages-html/my-work.html")
  .then((ambil) => ambil.text())
  .then((hasil) => {
    myWork.innerHTML = hasil;
  });

fetch("../pages-html/my-skill.html")
  .then((ambil) => ambil.text())
  .then((hasil) => {
    mySkill.innerHTML = hasil;
  });

fetch("../pages-html/contact-me.html")
  .then((ambil) => ambil.text())
  .then((hasil) => {
    contactMe.innerHTML = hasil;
  });

// script untuk scroll indicator
// const sections = document.querySelectorAll("section");

const documentHeight = document.innerHeight;
// console.log(documentHeight);
window.addEventListener("scroll", function () {
  let line = document.getElementById("line");
  const dot2 = document.getElementById("dot2");
  const dot3 = document.getElementById("dot3");
  const dot4 = document.getElementById("dot4");
  const dot5 = document.getElementById("dot5");

  const scroll = this.window.scrollY;

  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const value = (scroll / (documentHeight - windowHeight)) * 80;

  line.style.height = value + "%";
  if (value > 16.5) {
    dot2.classList.remove("non-active-dot");
    dot2.classList.add("active-dot");
  } else {
    dot2.classList.remove("active-dot");
    dot2.classList.add("non-active-dot");
  }
  if (value > 36.9) {
    dot3.classList.remove("non-active-dot");
    dot3.classList.add("active-dot");
  } else {
    dot3.classList.remove("active-dot");
    dot3.classList.add("non-active-dot");
  }
  if (value > 55.9) {
    dot4.classList.remove("non-active-dot");
    dot4.classList.add("active-dot");
  } else {
    dot4.classList.remove("active-dot");
    dot4.classList.add("non-active-dot");
  }
  if (value >= 75) {
    dot5.classList.remove("non-active-dot");
    dot5.classList.add("active-dot");
  } else {
    dot5.classList.remove("active-dot");
    dot5.classList.add("non-active-dot");
  }
  // console.log(value);
});

// script untuk splash screen
// const splash = document.getElementById("splash");

// document.addEventListener("DOMContentLoaded", (e) => {
//   setTimeout(() => {
//     splash.classList.add("display-none");
//   }, 2000);
// });
