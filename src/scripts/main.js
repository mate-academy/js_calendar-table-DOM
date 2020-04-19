'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(defaultYear, defaultMonth, element) {
  // WRITE YOUR CODE HERE
  let currentMonth = defaultMonth - 1;

  render();
  renderBody(defaultYear, currentMonth);

  element.querySelector('.calendar__prev')
    .addEventListener('click', () => {
      currentMonth--;
      renderBody(defaultYear, currentMonth);
    });

  element.querySelector('.calendar__next')
    .addEventListener('click', () => {
      currentMonth++;
      renderBody(defaultYear, currentMonth);
    });

  function render() {
    const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

    element.innerHTML = `
    <table>
      <thead>
        <tr>
          ${weekDays.map(day =>
    `<th>${day}</th>`
  ).join('')}
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
    <button class="calendar__prev">prev</button>
    <button class="calendar__next">next</button>
  `;
  }

  function renderBody(year, month) {
    const tBody = element.querySelector('tbody');
    const weeks = getWeeks(year, month);

    tBody.innerHTML = `
      ${weeks.map(week =>
    `<tr>
        ${week.map(day => `<td>${day || ''}</td>`).join('')}
        </tr>`
  ).join('')}
    `;
  }

  function getWeeks(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(`${year},${month + 1},1`).getDay() || 7;
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

    return weeks;
  }
}

calendarTable(2020, 4, calendar);
