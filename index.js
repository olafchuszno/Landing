const body = document.querySelector("body");
const viewMode = document.getElementById("viewMode");

viewMode.addEventListener("click", function () {
  body.classList.toggle("bg-black");
  body.classList.toggle("bg-white");
  body.classList.toggle("text-myDarkBone");
});
