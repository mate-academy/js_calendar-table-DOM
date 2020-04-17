'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const firstDay = new Date(year, month - 1).getDay() || 7;
  const daysInMonth = new Date(year, month, 0).getDate();
  const currentDay = 2 - firstDay;
  const weeks = [];

  renderCalendar(weeks);

  function calculatingWeeks(day, lastDay) {
    let d = day;
    // объявляю новую переменную d потому что
    // linter не дает изменять аргумент day

    while (d < lastDay) {
      const week = [];

      for (let i = 0; i < 7; i++) {
        if (d < 1 || d > lastDay) {
          week.push(0);
        } else {
          week.push(d);
        }
        d++;
      }

      weeks.push(week);
    }
  }

  function renderCalendar(monthWeeks) {
    calculatingWeeks(currentDay, daysInMonth);

    element.innerHTML = `
      <table>
        <thead>
          <tr>
            ${weekDays.map(day => `<th>${day}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${monthWeeks.map(week => `
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
  }
}

calendarTable(2019, 10, calendar);
