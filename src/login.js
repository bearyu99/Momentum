const loginForm = document.getElementById("login-form");
const nameInputElem = document.getElementById("name");
const modal = document.getElementById("modal");
const nameLabel = document.getElementById("username-label");
const savedUsername = localStorage.getItem("username");

function onLoginSubmit(e) {
  e.preventDefault();
  const username = nameInputElem.value;
  localStorage.setItem("username", username);
  greetingPaint(username);
}

function greetingPaint(username) {
  modal.classList.add("hidden");
  nameLabel.innerText = `${username}님`;
}

if (savedUsername) {
  greetingPaint(savedUsername);
} else {
  loginForm.addEventListener("submit", onLoginSubmit);
}
