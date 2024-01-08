const contactMessage = document.getElementById("contactMessage");

function displayMessage() {
  setTimeout(() => {
    contactMessage.classList.toggle("opacity-0");
    contactMessage.classList.toggle("opacity-100");
  }, 500);
}

displayMessage();
