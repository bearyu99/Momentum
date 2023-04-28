const handHour = document.getElementById("clock-hour");
const handMinute = document.getElementById("clock-minute");
const handSecond = document.getElementById("clock-second");
const textClock = document.getElementById("clock-text");

const clock = () => {
  const date = new Date();
  const hh = date.getHours(),
    mm = date.getMinutes(),
    ss = date.getSeconds();

  textClock.innerText = `${hh}:${String(mm).padStart(2, "0")}`;

  handHour.style.transform = `rotateZ(${hh * 30 + mm / 12}deg)`;
  handMinute.style.transform = `rotateZ(${mm * 6}deg)`;
  handSecond.style.transform = `rotateZ(${ss * 6}deg)`;
};

setInterval(clock, 1000);
