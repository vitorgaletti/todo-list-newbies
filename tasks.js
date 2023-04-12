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

//TODO
//create new task element
function createNewTaskEl(taskName, taskId) {
  //create task li
  let task = document.createElement("li");
  task.classList.add("task");
  task.classList.add("todo");
  task.setAttribute("id", taskId);

  //create .left_content div
  let leftContent = document.createElement("div");
  leftContent.classList.add("left_content");

  // todo icon
  let todoIcon = document.createElement("i");
  todoIcon.classList.add("ph-duotone");
  todoIcon.classList.add("ph-circle-dashed");
  todoIcon.classList.add("check_btn");
  todoIcon.addEventListener("click", completeTask());

  // done icon
  //task name / p
  //delete icon
}

// TODO
// add new task
function addTask(event) {
  event.preventDefault();
  console.log("Add Task");

  const newTaskName = addTaskInput.value;

  const newTask = {
    id: uid(),
    name: newTaskName,
    toDo: true,
  };

  taskData.push(newTask);
}

// TODO
// complete task
function completeTask(event) {
  console.log("Complete task");
}

// TODO
// incomplete task
function incompleteTask(event) {
  console.log("Incomplete task");
}

// TODO
// delete task
function deleteTask(event) {
  console.log("Delete Task");
}

// TODO
// sync HTML with taskData list

// TODO
// counter tasks
