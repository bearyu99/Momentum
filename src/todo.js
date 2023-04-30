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
  todoItem.className = "relative flex items-center mb-3 mx-1";
  // checkbox
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = newToDoObj.id / 1000;
  checkBox.className =
    "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded hidden";
  checkBox.addEventListener("click", (event) => {
    if (newToDoObj.checked) {
      label.classList.toggle("line-through");
      newToDoObj.checked = false;
    } else {
      label.classList.toggle("line-through");
      newToDoObj.checked = true;
    }
    saveToDos();
  });
  // label
  const label = document.createElement("label");
  label.innerText = newToDoObj.text;
  label.htmlFor = newToDoObj.id / 1000;
  label.className = "ml-2 text-sm font-medium text-gray-900 cursor-pointer";

  if (newToDoObj.checked) {
    label.classList.toggle("line-through");
  }
  // button
  const button = document.createElement("button");
  button.className = "absolute right-2 text-gray-400";
  button.innerText = "⌫";
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
    checked: false,
  };

  // To Do List 9개 초과 시 추가 등록 불가
  if (tempToDos.length + 1 > 9) {
    const todoInputLabel = document.querySelector("form#todo-input-form label");
    todoInput.classList.toggle("ignore");
    todoInput.classList.add("focus:border-red-600");
    todoInputLabel.innerText = "9개 이상 추가할 수 없습니다!";
    todoInputLabel.classList.add("peer-focus:text-red-600");
    setTimeout(() => {
      todoInput.classList.toggle("ignore");
      todoInput.classList.remove("focus:border-red-600");
      todoInputLabel.innerText = "오늘 할 일을 적고 ⏎를 누르세요!";
      todoInputLabel.classList.remove("peer-focus:text-red-600");
    }, 800);
    return;
  } else {
    // 9개 이하면 정상 등록
    tempToDos.push(newToDoObj);
    paintToDoItem(newToDoObj);
    saveToDos();
  }
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
