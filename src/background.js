const elemBg = document.getElementById("main-bg");
const imageList = ["bg_1.jpg", "bg_2.jpg", "bg_3.jpg"];
const randomX = Math.floor(Math.random() * 100);
const randomY = Math.floor(Math.random() * 100);
const randomImage = Math.floor(Math.random() * imageList.length);

// 랜덤 배경 이미지
elemBg.style.backgroundImage = `url("./assets/${imageList[randomImage]}")`;

// 랜덤 배경 위치
elemBg.style.backgroundPosition = `${randomX}% ${randomY}%`;
