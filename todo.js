const myInput = document.getElementById("myInput");
const submitButton = document.getElementById("submitButton");

myInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    console.log("Enter");
    myInput.value = "";
  }
});

submitButton.addEventListener("click", () => {
  console.log("submited");
});
