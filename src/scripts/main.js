'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const today = new Date(year, month - 1);
  const daysNumber = new Date(today.getFullYear(), today.getMonth() + 1, 0)
    .getDate();
  const startDay = today.getDay();
  const numberOfRows = Math.ceil((daysNumber + startDay) / 7);

  const table = document.createElement('table');
  const head = table.createTHead();

  table.append(head);

  const firstRow = head.insertRow(0);

  //  create header with days
  for (const day of days) {
    const cell = document.createElement('th');

    cell.textContent = day;
    firstRow.append(cell);
  }

  const body = table.createTBody();

  table.append(body);

  let counter = 1;

  //  created rows with cells in the body
  for (let i = 0; i < numberOfRows; i++) {
    const row = body.insertRow(i);

    for (let j = 0; j < days.length; j++) {
      const cell = row.insertCell(j);

      if ((i === 0 && (j < startDay - 1)) || (counter > daysNumber)) {
        continue;
      } else {
        cell.textContent = counter;
        counter++;
      }

      row.append(cell);
    }

    body.append(row);
  }

  element.append(table);
}

calendarTable(2020, 8, calendar);
