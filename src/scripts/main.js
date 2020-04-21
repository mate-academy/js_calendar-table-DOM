'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const firstDayOfTheWeek = new Date(year, month).getDay() || 7;
  const daysInMonth = new Date(year, month, 0).getDate();

  const daysOfTheWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  let currentDate = 2 - firstDayOfTheWeek;
  const weeks = [];

  while (currentDate < daysInMonth) {
    const week = [];

    for (let j = 0; j < 7; j++) {
      if (currentDate < 0 || currentDate > daysInMonth) {
        week.push(0);
      } else {
        week.push(currentDate);
      }
      currentDate++;
    }

    weeks.push(week);
  }

  calendar.innerHTML = `
  <table>
    <thead>
      <tr>
        ${daysOfTheWeek.map(day => `<th>${day}</th>`).join('')}
      <tr>
    </thead>
    <tbody>
    ${weeks.map(days =>
    `<tr>${days.map(day =>
      `<td>${day || ''}</td>`).join('')}
      </tr>`).join('')}
    <tbody>
  <table>
  `;
}

calendarTable(2019, 10, calendar);
