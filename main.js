const body = document.querySelector("body");
const viewMode = document.getElementById("viewMode");
const main = document.getElementById("main");

const url = new URL(window.location.href);
const parsedUrl = url.pathname;

document.getElementById(parsedUrl).classList.toggle("bg-gray-300");

viewMode.addEventListener("click", function () {
  body.classList.toggle("bg-black");
  body.classList.toggle("bg-white");
  main.classList.toggle("text-myDarkBone");
  main.classList.toggle("text-myBone");
});
