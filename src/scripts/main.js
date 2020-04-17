'use strict';

const calendar = document.querySelector('.calendar');

function calendarTable(year, month, element) {
  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const firstDayOfMonth = new Date(year, month - 1).getDay() || 7;
  const lastDayOfMonth = new Date(year, month, 0).getDate();
  const weeks = [];
  const currentDay = -firstDayOfMonth + 2;

  renderCalendar(weeks);

  function calculatingWeeks(day, lastDay) {
    while (day <= lastDay) {
      const week = [];

      for (let i = 0; i < 7; i++) {
        if (day <= 0 || day > lastDay) {
          week.push('');
        } else {
          week.push(day);
        }

      day++;
      }

      weeks.push(week);
    }
  }

  function renderCalendar(weeksOfMonth) {
    calculatingWeeks(currentDay, lastDayOfMonth);

    element.innerHTML = `
      <table>
        <thead>
          <tr>
            ${daysOfWeek.map(item =>
                `<th>${item}</th>`
              ).join('')}
          </tr>
        </thead>
        <tbody>
          ${weeksOfMonth.map(week1 =>
            `<tr>${week1.map(day =>
                `<td>${day}</td>`
            ).join('')}
            </tr>`
          ).join('')}
        </tbody>
      </table>
    `;
  }
}

calendarTable(2019, 4, calendar);
