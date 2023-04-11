function uid() {
  return Date.now().toString(16) + Math.random().toString(16).substring(2);
}

let taskData = [
  {
    id: uid(),
    name: "Ver se eu tô na esquina.",
    todo: true,
  },
  {
    id: uid(),
    name: "Dar banho nos gatos.",
    todo: false,
  },
];

const addTaskInput = document.getElementById("task_input");
const addTaskButton = document.getElementsByTagName("button")[0];
const taskList = document.getElementById("tasks_list");

// TODO
// add new task
function addTask(event) {
  console.log(event);
  event.preventDefault();
  console.log("Add Task");
}

// complete task
function completeTask(event) {
  console.log("Complete task");
}

// incomplete task
function incompleteTask(event) {
  console.log("Incomplete task");
}

// delete task
function deleteTask(event) {
  console.log("Delete Task");
}

// sync HTML with taskData list

// counter tasks
