'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const days = new Date(year, month, 0).getDate();
  let start = new Date(year, month - 1).getDay() - 1;

  if (start < 0) {
    start = 6;
  }

  element.innerHTML = `
    <table>
      <tr>
      </tr>
    </table>
  `;

  let currentRow = element.querySelector('tr');

  for (const weekDay of weekDays) {
    const cell = document.createElement('th');

    cell.textContent = weekDay;
    currentRow.append(cell);
  }

  for (let i = 1 - start; i <= days; i++) {
    if ((i + start - 1) % 7 === 0 || i === 1 - start) {
      currentRow.after(document.createElement('tr'));
      currentRow = element.querySelector('tbody').lastElementChild;
    }

    const cell = document.createElement('td');

    if (i > 0) {
      cell.textContent = i;
    }
    currentRow.append(cell);
  }
}

calendarTable(2019, 10, calendar);
