const body = document.querySelector("body");
const main = document.getElementById("main");
const viewMode = document.getElementById("viewMode");
const contactMessage = document.getElementById("contactMessage");

viewMode.addEventListener("click", function () {
  body.classList.toggle("bg-black");
  body.classList.toggle("bg-white");
  main.classList.toggle("text-gray-900");
  main.classList.toggle("text-myBone");

  // Change button name to Light/Dark
  if (viewMode.innerHTML === "Dark mode") {
    viewMode.innerHTML = "Light mode";
  } else {
    viewMode.innerHTML = "Dark mode";
  }
});

displayMessage();

function displayMessage() {
  setTimeout(() => {
    contactMessage.classList.toggle("opacity-0");
    contactMessage.classList.toggle("opacity-100");
  }, 500);
}
