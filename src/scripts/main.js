'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
  const weeks = [];

  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDay = new Date(year, month - 1, 1).getDay();
  let currentDay = 2 - firstDay;

  while (currentDay < daysInMonth) {
    const week = [];

    for (let i = 0; i < 7; i++) {
      if (currentDay <= 0 || currentDay > daysInMonth) {
        week.push(0);
      } else {
        week.push(currentDay);
      }
      currentDay++;
    }

    weeks.push(week);
  }

  element.innerHTML = `
  <h1>Calendar for ${year}-${month}</h1>
  <table>
    <thead>
      ${weekDays.map(day =>
    `<th>
        ${day}
      </th>`).join('')}
    </thead>
    <tbody>
      ${weeks.map(week =>
    `<tr>
      ${week.map(day =>
    `<td>
      ${day || ''}
    </td>`).join('')}
    </tr>`).join('')}
    </tbody
  </table > `;
}

calendarTable(2020, 4, calendar);
