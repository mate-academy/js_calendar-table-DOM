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
    const nextMonth = new Date(year, month + 1, 1);
    let current = new Date(year, month, 1);
    const realMonth = current.getMonth();

    while (current.getDay() !== 1) {
      current.setDate(current.getDate() - 1);
    }

    const weeks = [];

    while (current < nextMonth) {
      const week = [];

      for (let i = 0; i < 7; i++) {
        if (current.getMonth() !== realMonth) {
          week.push(0);
        } else {
          week.push(current.getDate());
        }

        current = current.setDate(current.getDate() + 1);
      }

      weeks.push(week);
    }

    return weeks;
  }
}

calendarTable(2020, 4, calendar);
