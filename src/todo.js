// To Do List 프레임 확장
const todoFrame = document.getElementById("todo-frame");
const todoHeader = document.getElementById("todo-header");
const todoContentWrap = document.getElementById("todo-content-wrap");
const expandArrow = document.getElementById("todo-expand");

todoHeader.addEventListener("click", (e) => {
  todoFrame.classList.toggle("pos");
  if (!todoFrame.classList.contains("pos")) {
    expandArrow.innerText = "〉";
  } else {
    expandArrow.innerText = "〈";
  }
});

// To Do List
const todoGroup = document.querySelector("ul#todo-list-group");
const todoInputForm = document.getElementById("todo-input-form");
const todoInput = document.getElementById("todo-input");
const TODOS_KEY = "todos";
const localToDos = localStorage.getItem(TODOS_KEY);
let tempToDos = [];

function paintToDoItem(newToDoObj) {
  // li
  const todoItem = document.createElement("li");
  todoItem.id = newToDoObj.id;
  todoItem.className = "relative flex items-center mb-3 mx-2";
  // checkbox
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = newToDoObj.id / 1000;
  checkBox.className =
    "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded";
  checkBox.addEventListener("click", () => {
    label.classList.toggle("line-through");
  });
  // label
  const label = document.createElement("label");
  label.innerText = newToDoObj.text;
  label.htmlFor = newToDoObj.id / 1000;
  label.className = "ml-2 text-sm font-medium text-gray-900";
  // button
  const button = document.createElement("button");
  button.className = "absolute right-2";
  button.innerText = "🗑️";
  button.addEventListener("click", deleteToDo);
  // checkbox, label, button --append--> li --append--> ul
  todoItem.appendChild(checkBox);
  todoItem.appendChild(label);
  todoItem.appendChild(button);
  todoGroup.appendChild(todoItem);
}

function submitToDo(e) {
  e.preventDefault();
  const newToDo = todoInput.value;
  todoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  tempToDos.push(newToDoObj);
  paintToDoItem(newToDoObj);
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(tempToDos));
}

function deleteToDo(event) {
  const todoItem = event.target.parentElement;
  todoItem.remove();
  tempToDos = tempToDos.filter((toDo) => toDo.id !== parseInt(todoItem.id));
  saveToDos();
}

if (localToDos) {
  const parseToDos = JSON.parse(localToDos);
  tempToDos = parseToDos;
  parseToDos.forEach((element) => {
    paintToDoItem(element);
  });
}

todoInputForm.addEventListener("submit", submitToDo);
