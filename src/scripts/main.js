'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const daysOfTheWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
  const weeks = [];

  const monthDays = new Date(year, month, 0).getDate();
  const firstDay = new Date(year, month - 1, 1).getDay();
  let nowDay = 2 - firstDay;

  while (nowDay < monthDays) {
    const week = [];

    for (let i = 0; i < 7; i++) {
      if (nowDay <= 0 || nowDay > monthDays) {
        week.push(0);
      } else {
        week.push(nowDay);
      }
      nowDay++;
    }

    weeks.push(week);
  }

  element.innerHTML = `
  <table>
    <thead>
      ${daysOfTheWeek.map(day =>
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

calendarTable(2020, 6, calendar);
