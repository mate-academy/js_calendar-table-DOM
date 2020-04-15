'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month) {
  const days = Math.round((new Date(year, month)
    - new Date(year, month - 1))
    / 24 / 3600 / 1000);
  const nameOfDays = {
    'Mon': 1,
    'Tus': 2,
    'Wed': 3,
    'Thu': 4,
    'Fri': 5,
    'Sat': 6,
    'Sun': 7,
  };
  const daysOfWeek = [
    'пн',
    'вт',
    'ср',
    'чт',
    'пт',
    'сб',
    'нд',
  ];
  const day = nameOfDays[new Date(year, month - 1).toString().split(' ')[0]];
  let count = 2 - day;
  const arrWeeks = [];

  for (let i = 0; i < (day + days - 1) / 7; i++) {
    const myArr = [];

    for (let j = 0; j < 7; j++) {
      if (count <= days && count >= 1) {
        myArr.push(`<td>${count}</td>`);
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
