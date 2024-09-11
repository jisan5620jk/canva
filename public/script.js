//Time Button Active

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".time-btn button, .time-btn button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});

//Custom Tab

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-btn");
  const all_content = document.querySelectorAll(".tab-content");

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (tab) {
        tab.classList.remove("active");
      });
      tab.classList.add("active");

      all_content.forEach(function (content) {
        content.classList.remove("active");
      });
      all_content[index].classList.add("active");
    });
  });
});

//Calender

const calendarDays = document.getElementById("calendar-days");
const month = document.getElementById("month");
const year = document.getElementById("year");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function renderCalendar() {
  date.setDate(1);
  const firstDayIndex = date.getDay() - 1;
  const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
  const prevLastDay = new Date(currentYear, currentMonth, 0).getDate();
  const nextDays = 7 - new Date(currentYear, currentMonth + 1, 0).getDay();

  month.innerHTML = `${months[currentMonth]}`;
  year.innerHTML = `${currentYear}`;

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }

  calendarDays.innerHTML = days;
}

prevButton.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  date.setMonth(currentMonth);
  date.setFullYear(currentYear);
  renderCalendar();
});

nextButton.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  date.setMonth(currentMonth);
  date.setFullYear(currentYear);
  renderCalendar();
});

renderCalendar();
