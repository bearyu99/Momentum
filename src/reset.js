const icon = document.getElementById("weather-icon");
let intervalId;
let count = 0;

icon.addEventListener("mousedown", function () {
  intervalId = setInterval(checkCount, 1000);
});

icon.addEventListener("mouseup", function () {
  clearInterval(intervalId);
  count = 0;
});

function checkCount() {
  count += 1;
  console.log(count);
  if (count >= 5) {
    const reset = confirm("초기화하시겠습니까?");
    if (reset) {
      localStorage.clear();
      location.reload();
    }
    clearInterval(intervalId);
    count = 0;
  }
}
