const body = document.querySelector("body");
const viewMode = document.getElementById("viewMode");
const contactMessage = document.getElementById("contactMessage");

viewMode.addEventListener("click", function () {
  body.classList.toggle("bg-black");
  body.classList.toggle("bg-white");
  main.classList.toggle("text-gray-900");
  main.classList.toggle("text-myBone");
});

displayMessage();

function displayMessage() {
  setTimeout(() => {
    contactMessage.classList.toggle("opacity-0");
    contactMessage.classList.toggle("opacity-100");
  }, 500);
}
