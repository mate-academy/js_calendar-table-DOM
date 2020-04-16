'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month) {
  const daysOfWeek = [
    'пн',
    'вт',
    'ср',
    'чт',
    'пт',
    'сб',
    'нд',
  ];
  const daysImMonth = new Date(year, month, 0).getDate();
  const daysInWeek = 7;
  const day = new Date(year, month - 1).getDay() === 0
    ? 7
    : new Date(year, month - 1).getDay();
  let count = 1;
  const arrWeeks = [];

  for (let i = 0; i < (daysImMonth + day - 1) / daysInWeek; i++) {
    const myArr = [];

    for (let j = 0; j < daysInWeek; j++) {
      if (count < daysImMonth + day && count >= day) {
        myArr.push(`<td>${count - day + 1}</td>`);
      } else {
        myArr.push(`<td></td>`);
      }
      count++;
    }
    arrWeeks.push(`<tr>${myArr.join('')}</tr>`);
  }

  calendar.innerHTML = `
    <table>
      <thead>
        <tr>
          ${daysOfWeek.map(el => `<th>${el}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${arrWeeks.join('')}
      </tbody>
    </table>
  `;
}

calendarTable(2020, 3, calendar);
calendarTable(2020, 4, calendar);
calendarTable(2020, 4, calendar);
