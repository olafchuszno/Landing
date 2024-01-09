const body = document.querySelector("body");
const main = document.getElementById("main");
const viewMode = document.getElementById("viewMode");
const contactMessage = document.getElementById("contactMessage");
const contactMessageText = document.getElementById("contactMessageText");

const contactPageLink = document.querySelector(".contactPageLink");
const mainPageLink = document.querySelector(".mainPageLink");

// Get the url and parsed url
const url = new URL(window.location.href);
const parsedUrl = url.pathname;

// Make active tab work on local machine
if (parsedUrl === "/index.html" || parsedUrl === "/contact/index.html") {
  console.log('url is "/index.html" or "/contact/index.html"');
  mainPageLink.id = "/index.html";
  contactPageLink.id = "/contact/index.html";
}

console.log(parsedUrl);

// Show the active link(current site) by the parsed url
document.getElementById(parsedUrl).classList.toggle("bg-gray-300");

let timesViewModeClicked = 0;

viewMode.addEventListener("click", function () {
  body.classList.toggle("bg-black");
  body.classList.toggle("bg-white");
  main.classList.toggle("text-gray-900");
  main.classList.toggle("text-myBone");

  // Change button name to Light/Dark
  if (viewMode.innerHTML === "Light mode 🌕") {
    viewMode.innerHTML = "Dark mode ☾";
    contactMessageText.innerHTML = "Feel free to contact me anytime";
  } else {
    viewMode.innerHTML = "Light mode 🌕";
    contactMessageText.innerHTML = "Day and night";
  }
});

displayMessage();

function displayMessage() {
  setTimeout(() => {
    contactMessage.classList.toggle("opacity-0");
    contactMessage.classList.toggle("opacity-100");
  }, 500);
}
