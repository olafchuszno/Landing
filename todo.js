const myInput = document.getElementById("myInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const activeTasksDisplay = document.getElementById("activeTasks");
const clearButton = document.getElementById("clearButton");

const liClasses =
  "px-4 py-2 text-center text-xl bg-myLace rounded-2xl mt-4 hover:bg-green-500 task";

let taskCounter = 0;
let failedAttempts = 0;

//
myInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleNewTask();
  }
});

// Listen for the add task button click to add the task
addTaskButton.addEventListener("click", () => {
  handleNewTask();
});

// Listen for task clicks
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("task")) {
    e.target.remove();
    decrementTaskCounter();
  }
});

clearButton.addEventListener("click", () => {
  taskList.innerHTML = "";
  resetTaskCounter();
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

function handleNewTask() {
  // Add a new task if there is a content content
  if (myInput.value !== "") {
    // Increment task counter
    incrementTaskCounter();

    // Create the element and add it to the DOM with appropriate classes
    addLi(myInput.value, taskCounter);
  } else {
    // If the user has done it more than one time display the proper message
    if (failedAttempts > 1) {
      alert("The task you are creating cannot be empty.");
    } else {
      // Guide the user
      alert("A task must contain something... Right?");
    }
    // Check for more empty clicks and guide the user
    failedAttempts++;
  }

  // Clear task input field
  myInput.value = "";
}

function incrementTaskCounter() {
  taskCounter++;
  activeTasksDisplay.innerHTML = taskCounter;
}

function decrementTaskCounter() {
  taskCounter--;
  activeTasksDisplay.innerHTML = taskCounter;
}

function resetTaskCounter() {
  taskCounter = 0;
  activeTasksDisplay.innerHTML = taskCounter;
}
