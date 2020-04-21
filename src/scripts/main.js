'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const daysOfTheWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'];

  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDay = new Date(`${year}, ${month}, 1`).getDay() || 7;

  let currentDate = 2 - firstDay;

  const weeks = [];

  while (currentDate < daysInMonth) {
    const week = [];

    for (let i = 0; i < 7; i++) {
      if (currentDate < 1 || currentDate > daysInMonth) {
        week.push(0);
      } else {
        week.push(currentDate);
      }
      currentDate++;
    }
    weeks.push(week);
  }

  element.innerHTML = `
    <h1>Calendar for ${year}-${month}</h1>
    <table>
      <thead>
        <tr>
          ${daysOfTheWeek.map(day => `
            <th>${day}</th>
          `).join('')}
        </tr>
      </thead>
      <tbody>
        ${weeks.map(days => `
          <tr>
            ${days.map(day => `
            <td>${day || ''}</td>
            `).join('')}
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

calendarTable(2020, 4, calendar);
