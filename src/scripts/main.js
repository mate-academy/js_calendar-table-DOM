'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const tHeder = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд']
    .map(nameOfDay => `<th>${nameOfDay}</th>`).join('');
  const days = new Date(year, month, 0).getDate();
  const dayOfLastMonth = new Date(year, month - 1, 0).getDay();
  const arrayOfDays = [];
  let countDayOfLastMonth = 0;

  while (countDayOfLastMonth < dayOfLastMonth) {
    countDayOfLastMonth++;
    arrayOfDays.push('');
  }

  let dayNum = 0;

  while (dayNum < days) {
    dayNum++;
    arrayOfDays.push(dayNum);
  }

  const normalizeDay = arrayOfDays.map(day => `<td>${day}</td>`);
  const tBody = [];

  for (let index = 0; index < normalizeDay.length + 1; index++) {
    if (index % 7 === 0) {
      tBody.push(`</tr><tr>`);
    };

    if (index === normalizeDay.length) {
      let i = normalizeDay.length;

      while (i % 7 !== 0) {
        tBody.push(`<td></td>`);
        i++;
      }
    }

    tBody.push(normalizeDay[index]);
  }

  element.innerHTML = `
    <table>
      <tr>${tHeder}</tr>
      <tr>${tBody.join('')}</tr>
    </table>`;
}

calendarTable(2019, 10, calendar);
