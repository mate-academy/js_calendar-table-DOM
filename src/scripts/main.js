'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const table = create('table', element);

  setTableHead(table);
  setTableBody(year, month, table);
}

function setTableHead(table) {
  const head = create('thead', table);
  const row = create('tr', head);

  const weekDays = ['Mn', 'Tu', 'Wd', 'Th', 'Fr', 'St', 'Sn'];

  for (let i = 0; i < 7; i++) {
    create('th', row).textContent = weekDays[i];
  }
}

function setTableBody(year, month, table) {
  const body = create('tbody', table);

  const date = new Date(year, month - 1);
  const firstDay = (date.getDay() || 7) - 1;
  const daysAmount = new Date(year, month, 0).getDate();

  let isCurrentMonth = true;
  let daysCounter = 1;

  while (isCurrentMonth) {
    const row = create('tr', body);

    for (let i = 0; i < 7; i++) {
      const cell = create('td', row);

      if (daysCounter === 1 && i !== firstDay) {
        continue;
      }

      if (daysCounter > daysAmount) {
        isCurrentMonth = false;
        continue;
      }

      cell.textContent = daysCounter++;
    }
  }
}

function create(tagName, element) {
  const innerElement = document.createElement(tagName);

  element.append(innerElement);

  return innerElement;
}

calendarTable(2019, 10, calendar);
