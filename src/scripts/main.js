/* eslint-disable no-unmodified-loop-condition */
'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const monthJS = month - 1;
  const currentDate = new Date(year, month - 1, 1);
  const lastDate = new Date(year, month, 0);

  while (currentDate.getDay() !== 1) {
    currentDate.setDate(currentDate.getDate() - 1);
  }

  const weeks = [];

  while (currentDate <= lastDate) {
    const week = [];

    for (let i = 0; i < 7; i++) {
      if (currentDate.getMonth() !== monthJS) {
        week.push(0);
      } else {
        week.push(currentDate.getDate());
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    weeks.push(week);
  }

  element.innerHTML = `
    <table>
      <thead>
        <tr>
         ${weekDays.map(day => `
           <th>${day}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${weeks.map(week => `
          <tr>
            ${week.map(day => `
              <td>${day || ''}</td>
            `).join('')}
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

calendarTable(2019, 10, calendar);
