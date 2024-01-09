const body = document.querySelector("body");
const viewMode = document.getElementById("viewMode");
const main = document.getElementById("main");
const descriptions = document.querySelectorAll(".projectDescription");
const changeBackgroundWithViewMode = document.querySelectorAll(
  ".changeBackgroundWithViewMode"
);

// Get all the links with active functionality
const contactPageLink = document.querySelector(".contactPageLink");
const mainPageLink = document.querySelector(".mainPageLink");

// Get the url and parsed url
const url = new URL(window.location.href);
const parsedUrl = url.pathname;

// Make active tab work on local machine
if (parsedUrl == "/index.html" || parsedUrl === "/contact/index.html") {
  mainPageLink.id = "/index.html";
  contactPageLink.id = "/contact/index.html";
}

// Test the url
console.log(parsedUrl);

// Show the active link(current site) by the parsed url
document.getElementById(parsedUrl).classList.toggle("bg-gray-300");

viewMode.addEventListener("click", function () {
  body.classList.toggle("bg-black");
  body.classList.toggle("bg-white");

  // Change text color of project descriptions
  descriptions.forEach((descriptions) => {
    descriptions.classList.toggle("text-myBone");
  });

  // Change background of elements
  changeBackgroundWithViewMode.forEach((element) => {
    element.classList.toggle("bg-myBone");
    element.classList.toggle("bg-myLace");
  });

  // Change button name to Light/Dark
  if (viewMode.innerHTML === "Light mode 🌕") {
    viewMode.innerHTML = "Dark mode ☾";
  } else {
    viewMode.innerHTML = "Light mode 🌕";
  }
});
