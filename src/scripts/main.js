'use strict';

const calendar = document.querySelector('#calendar');

const calendarTable = (year, month, element) => {
  const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'];
  const firstCalendarDay = new Date(year, month - 1).getDay() || 7;
  const daysQuantity = new Date(year, month, 0).getDate();
  let currentDay = 2 - firstCalendarDay;
  const weeks = [];

  while (currentDay < daysQuantity) {
    const week = [];

    for (let i = 0; i < 7; i++) {
      if (currentDay < 1 || currentDay > daysQuantity) {
        week.push(0);
      } else {
        week.push(currentDay);
      }
      currentDay++;
    }

    weeks.push(week);
  }

  element.innerHTML = `
  <table>
    <thead>
      <tr>
        ${days.map(day => `<th>${day}</th>`).join('')}
      </tr>
    </thead>
    <tbody>
      ${weeks.map(week => `
        <tr>
          ${week.map(day => `
            <td>
              ${day || ''}
            </td>
          `).join('')}
        </tr>
      `).join('')}
    </tbody>
  </table>
  `;
};

calendarTable(2020, 9, calendar);
