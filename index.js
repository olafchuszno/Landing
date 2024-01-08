const body = document.querySelector("body");
const viewMode = document.getElementById("viewMode");
const main = document.getElementById("main");

viewMode.addEventListener("click", function () {
  body.classList.toggle("bg-black");
  body.classList.toggle("bg-white");
  main.classList.toggle("text-myDarkBone");
  main.classList.toggle("text-myBone");
});
