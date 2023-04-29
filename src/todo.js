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
