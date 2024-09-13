//Change Date Number

let currentDate = new Date();
updateDates();

document.getElementById("left-arrow").addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() - 1);
  updateDates();
});

document.getElementById("right-arrow").addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() + 1);
  updateDates();
});

function updateDates() {
  document.getElementById("number").textContent = currentDate.getDate();

  let prevDate = new Date(currentDate);
  prevDate.setDate(currentDate.getDate() - 1);
  document.getElementById("prev-date").textContent = prevDate.getDate();

  let extraPrevDate = new Date(currentDate);
  extraPrevDate.setDate(currentDate.getDate() - 2);
  document.getElementById("extra-prev-date").textContent =
    extraPrevDate.getDate();

  let nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + 1);
  document.getElementById("next-date").textContent = nextDate.getDate();

  let extraNextDate = new Date(currentDate);
  extraNextDate.setDate(currentDate.getDate() + 2);
  document.getElementById("extra-next-date").textContent =
    extraNextDate.getDate();
}

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

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-btn2");
  const all_content = document.querySelectorAll(".tab-content2");

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


const calendarDays2 = document.getElementById("calendar-days2");
const month2 = document.getElementById("month2");
const year2 = document.getElementById("year2");
const prevButton2 = document.getElementById("prev2");
const nextButton2 = document.getElementById("next2");

let date2 = new Date();
let currentMonth2 = date2.getMonth();
let currentYear2 = date2.getFullYear();

const months2 = [
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

function renderCalendar2() {
  date2.setDate(1);
  const firstDayIndex2 = date2.getDay() - 1;
  const lastDay2 = new Date(currentYear2, currentMonth2 + 1, 0).getDate();
  const prevLastDay2 = new Date(currentYear2, currentMonth2, 0).getDate();
  const nextDays2 = 7 - new Date(currentYear2, currentMonth2 + 1, 0).getDay();

  month2.innerHTML = `${months2[currentMonth2]}`;
  year2.innerHTML = `${currentYear2}`;

  let days2 = "";

  for (let x2 = firstDayIndex2; x2 > 0; x2--) {
    days2 += `<div class="prev-date">${prevLastDay2 - x2 + 1}</div>`;
  }

  for (let i2 = 1; i2 <= lastDay2; i2++) {
    if (
      i2 === new Date().getDate() &&
      currentMonth2 === new Date().getMonth() &&
      currentYear2 === new Date().getFullYear()
    ) {
      days2 += `<div class="today">${i2}</div>`;
    } else {
      days2 += `<div>${i2}</div>`;
    }
  }

  for (let j2 = 1; j2 <= nextDays2; j2++) {
    days2 += `<div class="next-date">${j2}</div>`;
  }

  calendarDays2.innerHTML = days2;
}

prevButton2.addEventListener("click", () => {
  currentMonth2--;
  if (currentMonth2 < 0) {
    currentMonth2 = 11;
    currentYear2--;
  }
  date2.setMonth(currentMonth2);
  date2.setFullYear(currentYear2);
  renderCalendar2();
});

nextButton2.addEventListener("click", () => {
  currentMonth2++;
  if (currentMonth2 > 11) {
    currentMonth2 = 0;
    currentYear2++;
  }
  date2.setMonth(currentMonth2);
  date2.setFullYear(currentYear2);
  renderCalendar2();
});

renderCalendar2();