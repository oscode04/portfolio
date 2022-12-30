let aboutMe = document.getElementById("sec2");
let landingPage = document.getElementById("sec1");

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
