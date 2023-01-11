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
