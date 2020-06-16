'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const weekDays = ['Mn', 'Tu', 'Wd', 'Th', 'Fr', 'St', 'Sn'];

  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const tableBody = document.createElement('tbody');

  element.append(table);
  table.append(tableHead);
  table.append(tableBody);

  for (let i = 0; i < 7; i++) {
    const headCell = document.createElement('th');

    headCell.innerText = weekDays[i];
    tableHead.append(headCell);
  }

  const daysInMonth = new Date(year, month, 0).getDate();
  const monthStart = new Date(year, month - 1, 1).getDay();
  const rowCOunt = Math.ceil(daysInMonth / 7);

  for (let i = 0; i < rowCOunt; i++) {
    const tableRow = document.createElement('tr');

    tableBody.append(tableRow);

    for (let j = 1; j <= 7; j++) {
      const bodyCell = document.createElement('td');

      if (j + (i * 7) < monthStart || j + (i * 7) - monthStart >= daysInMonth) {
        bodyCell.innerText = '';
      } else {
        bodyCell.innerText = j + (i * 7) - monthStart + 1;
      }

      tableRow.append(bodyCell);
    }
  }
}

calendarTable(2019, 10, calendar);
