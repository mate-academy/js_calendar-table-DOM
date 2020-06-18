'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const weekDayList = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const days = new Date(year, month, 0).getDate();
  const start = (new Date(year, month - 1).getDay() || 7) - 1;

  element.innerHTML = `
    <table>
      <tr>
      </tr>
    </table>
  `;

  let actualRow = element.querySelector('tr');

  for (const day of weekDayList) {
    const cell = document.createElement('th');

    cell.textContent = day;
    actualRow.append(cell);
  }

  for (let i = 1 - start; i <= days; i++) {
    if ((i + start - 1) % 7 === 0 || i === 1 - start) {
      actualRow.after(document.createElement('tr'));
      actualRow = element.querySelector('tbody').lastElementChild;
    }

    const cell = document.createElement('td');

    if (i > 0) {
      cell.textContent = i;
    }
    actualRow.append(cell);
  }
}

calendarTable(2018, 10, calendar);
