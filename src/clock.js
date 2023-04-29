const handHour = document.getElementById("clock-hour");
const handMinute = document.getElementById("clock-minute");
const handSecond = document.getElementById("clock-second");
const textClock = document.getElementById("clock-text");
const meridiemElem = document.getElementById("clock-meridiem");
// const textClockMeridiem;

const clock = () => {
  const date = new Date();
  const hh = date.getHours();
  const mm = date.getMinutes();
  const ss = date.getSeconds();

  const meridiem = Math.sign(hh - 12) < 0 ? "AM" : "PM";
  const formatHour = String(hh).padStart(2, "0");
  const formatMinute = String(mm).padStart(2, "0");

  textClock.innerText = `${formatHour}:${formatMinute}`;
  meridiemElem.innerText = meridiem;

  handHour.style.transform = `rotateZ(${hh * 30 + mm / 12}deg)`;
  handMinute.style.transform = `rotateZ(${mm * 6}deg)`;
  handSecond.style.transform = `rotateZ(${ss * 6}deg)`;
};

setInterval(clock, 1000);
