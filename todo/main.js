const myInput = document.getElementById("myInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const activeTasksDisplay = document.getElementById("activeTasks");
const clearButton = document.getElementById("clearButton");
const listButton = document.getElementById("listButton");
const groupButton = document.getElementById("groupButton");
const completedTasksCounter = document.getElementById("completedTasks");

const liClasses =
  "px-4 py-2 text-center text-xl  bg-myLace rounded-2xl mt-4 hover:bg-green-500 task";

let taskCounter = 0;
let completedTasks = 0;
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

// Listen for task clicks (and delete them)
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("task")) {
    e.target.remove();
    decrementTaskCounter();
    updateCompletedTasks();
  }
});

clearButton.addEventListener("click", () => {
  taskList.innerHTML = "";
  resetTaskCounter();
});

groupButton.addEventListener("click", () => {
  // If it's green (if user was instructed) turn it off
  if (groupButton.classList.contains("bg-green-500")) {
    groupButton.classList.toggle("bg-green-500");
  }

  // if it's NOT active (if it's not white)
  if (!groupButton.classList.contains("bg-white")) {
    // Change style of the buttons
    groupButton.classList.toggle("bg-white");
    listButton.classList.toggle("bg-white");
    // Allow task grouping
    taskList.classList.toggle("flex");
  }
});

listButton.addEventListener("click", () => {
  // if it's NOT active
  if (!listButton.classList.contains("bg-white")) {
    // Change style of the buttons
    groupButton.classList.toggle("bg-white");
    listButton.classList.toggle("bg-white");
    // Allow task grouping
    taskList.classList.toggle("flex");
  }
});

// Functions

function addLi(content) {
  const newLi = document.createElement("li");
  newLi.innerHTML = content;
  newLi.classList = liClasses;

  taskList.appendChild(newLi);
}

function handleNewTask() {
  // Add a new task if there is a content content
  if (myInput.value !== "") {
    // Increment task counter
    incrementTaskCounter();

    // Create the element and add it to the DOM
    addLi(myInput.value);
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
  if (taskCounter > 3) {
    // If the tasks aren't grouped together already, display a guiding message
    if (!taskList.classList.contains("flex")) {
      alert("Consider grouping your tasks. Simply click on the group button!");
      if (!groupButton.classList.contains("bg-green-500")) {
        groupButton.classList.toggle("bg-green-500");
      }
    }
  }
}

function decrementTaskCounter() {
  taskCounter--;
  activeTasksDisplay.innerHTML = taskCounter;
}

function resetTaskCounter() {
  taskCounter = 0;
  activeTasksDisplay.innerHTML = taskCounter;
}

function updateCompletedTasks() {
  completedTasks++;
  completedTasksCounter.innerHTML = completedTasks;
  if (completedTasks % 10 === 0) {
    alert(
      "Every ten tasks done is ... ten things you won't have to do tomorrow!"
    );
  }
}
