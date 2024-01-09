const body = document.querySelector("body");
const viewMode = document.getElementById("viewMode");
const main = document.getElementById("main");
const descriptions = document.querySelectorAll("p");

const url = new URL(window.location.href);
const parsedUrl = url.pathname;

document.getElementById(parsedUrl).classList.toggle("bg-gray-300");

viewMode.addEventListener("click", function () {
  body.classList.toggle("bg-black");
  body.classList.toggle("bg-white");

  descriptions.classList.toggle("text-myBone");
  descriptions.classList.toggle("");
});
