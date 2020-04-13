'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const firstDayOfTheWeek = new Date(year, month - 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const weeksCount = Math.ceil(daysInMonth / 7);
  const daysOfTheWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  let dayCount = 1;
  let daysToPad = firstDayOfTheWeek - 1;

  let daysString = '';

  for (let j = 0; j < weeksCount; j++) {
    daysString += '<tr>';

    for (let i = 0; i < 7; i++) {
      if (daysToPad > 0) {
        daysString += `<td></td>`;
        daysToPad--;
      } else {
        daysString += `<td>${dayCount}</td>`;

        if (dayCount === daysInMonth) {
          break;
        }
        dayCount++;
      }
    }
    daysString += '</tr>';
  }

  calendar.innerHTML = `
  <table>
    <tr>
      ${daysOfTheWeek.map(day => `
          <th>${day}</th>
        `).join('')}
    </tr>
    ${daysString}
  </table>
  `;
}

calendarTable(2019, 10, calendar);
