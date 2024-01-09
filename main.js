const body = document.querySelector("body");
const viewMode = document.getElementById("viewMode");
const main = document.getElementById("main");
const descriptions = document.querySelectorAll(".projectDescription");
// Get all the links with active functionality
const contactPageLink = document.querySelector(".contactPageLink");
const mainPageLink = document.querySelector(".mainPageLink");

// Get the url and parsed url
const url = new URL(window.location.href);
const parsedUrl = url.pathname;

// Make active tab work on local machine
if (parsedUrl == "/index.html" || "/contact/index.html") {
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

  descriptions.forEach((descriptions) => {
    descriptions.classList.toggle("text-myBone");
  });
});
