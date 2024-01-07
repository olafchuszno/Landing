const myInput = document.getElementById("myInput");
const submitButton = document.getElementById("submitButton");
const taskList = document.getElementById("taskList");

const liClasses = "px-2 py-1 text-center text-xl bg-myLace rounded-2xl mt-4";

let taskCounter = 0;

myInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    console.log("Enter");

    // Increment task counter
    taskCounter++;

    // Add a new task
    addLi(myInput.value, taskCounter);

    myInput.value = "";

    // If it's the first task, add padding to the list
    if (taskCounter === 1) {
      taskList.classList.toggle("p-4");
    }
  }
});

submitButton.addEventListener("click", () => {
  console.log("submited");
});

function addLi(content, taskCounter) {
  const newLi = document.createElement("li");
  newLi.innerHTML = content;
  newLi.classList = liClasses;

  if (taskCounter === 1) {
    newLi.classList.toggle("mt-4");
  }

  taskList.appendChild(newLi);
}

// Add p-4 to the ul if the task count is > 0
