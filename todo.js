const myInput = document.getElementById("myInput");
const submitButton = document.getElementById("submitButton");
const taskList = document.getElementById("taskList");
const activeTasksDisplay = document.getElementById("activeTasks");

const liClasses =
  "px-2 py-2 text-center text-xl bg-myLace rounded-2xl mt-4 hover:bg-green-500 task";

let taskCounter = 0;
let failedAttempts = 0;

myInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    console.log("Enter");

    // Add a new task if there is a content content
    if (myInput.value !== "") {
      // Increment task counter
      incrementTaskCounter();

      addLi(myInput.value, taskCounter);
    } else {
      if (failedAttempts > 2) {
        alert("A task must contain something... Right?");
      }
      failedAttempts++;
    }

    myInput.value = "";

    // // If it's the first task, add padding to the list
    // if (taskCounter === 1) {
    //   taskList.classList.toggle("p-4");
    // }
  }
});

submitButton.addEventListener("click", () => {
  console.log("submited");
});

// Listen for task clicks
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("task")) {
    e.target.remove();
    decrementTaskCounter();
  }
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

function incrementTaskCounter() {
  taskCounter++;
  activeTasksDisplay.innerHTML = taskCounter;
}

function decrementTaskCounter() {
  taskCounter--;
  activeTasksDisplay.innerHTML = taskCounter;
}
