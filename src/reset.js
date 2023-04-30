const icon = document.getElementById("weather-icon");
let intervalId;
let count = 0;

icon.addEventListener("mousedown", function () {
  intervalId = setInterval(checkCount, 1000);
});

icon.addEventListener("mouseup", function () {
  icon.classList.remove("slide-animation");
  clearInterval(intervalId);
  count = 0;
});

icon.parentElement.addEventListener("mouseleave", function () {
  icon.classList.remove("slide-animation");
  clearInterval(intervalId);
  count = 0;
});

function checkCount() {
  count += 1;
  if (!icon.classList.contains("slide-animation")) {
    icon.classList.add("slide-animation");
  }
  if (count >= 5) {
    const reset = confirm("초기화하시겠습니까?");
    icon.classList.remove("slide-animation");
    if (reset) {
      localStorage.clear();
      location.reload();
    }
    clearInterval(intervalId);
    count = 0;
  }
}
