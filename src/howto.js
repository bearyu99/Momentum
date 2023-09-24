const text = document.querySelector("div#how-to p");
const card = document.getElementById("todo-header");
const form = document.getElementById("todo-input-form");
const hideBtn = document.getElementById("how-to-btn");
const pingIcon = document.querySelector("div#how-to div span");
const HOWTO_KEY = "howto";

let step = 0;

card.addEventListener("click", () => {
  if (step === 0) {
    text.innerText = "하단 입력창에 오늘 할 일을 추가해보세요!";
    step = 1;
  }
});

form.addEventListener("submit", () => {
  if (step === 1) {
    text.innerHTML =
      "끝낸 항목은 텍스트를 클릭해서 체크할 수 있어요<br />한 번 체크해볼까요?";
    step = 2;

    const todoLabel = document.querySelectorAll("ul#todo-list-group li label");
    todoLabel.forEach((element) => {
      element.addEventListener("click", () => {
        if (step === 2) {
          text.innerHTML =
            "잘 못 입력했거나 지우고 싶은 항목은<br />오른쪽 ⌫ 아이콘을 클릭해서 없앨 수 있어요!<br />방금 등록한 할 일을 삭제해보세요!";
          step = 3;

          const todoButton = document.querySelectorAll(
            "ul#todo-list-group li button"
          );
          todoButton.forEach((element) => {
            element.addEventListener("click", () => {
              if (step === 3) {
                text.innerHTML =
                  "굳! 날씨 아이콘을 5초간 누르면 모든 내용을 초기화할 수 있어요<br />마지막으로 아래 버튼을 눌러서 HOW-TO-USE를 마칠게요!<br />오늘도 좋은 하루 보내시길 바랄게요 🤗";
                pingIcon.classList.remove("hidden");
              }
            });
          });
        }
      });
    });
  }
});

hideBtn.addEventListener("click", () => {
  localStorage.setItem(HOWTO_KEY, true);
  isHide();
});

// if (isHide) {
//   const howtoDiv = document.getElementById("how-to");
//   howtoDiv.classList.remove("md:block");
// }

function isHide() {
  const hide = localStorage.getItem(HOWTO_KEY);
  const howtoDiv = document.getElementById("how-to");
  if (hide) {
    howtoDiv.classList.remove("md:block");
    document.body.classList.remove('justify-evenly')
    document.body.classList.add('justify-center')
  } else {
  }
}
isHide();
