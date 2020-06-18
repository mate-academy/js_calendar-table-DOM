'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const today = new Date(year, month - 1);
  const start = today.getDay();
  const rows = start > 5 ? 6 : 5;
  const days = 32 - new Date(today.getFullYear(), today.getMonth(), 32)
    .getDate();
  let date = 1;

  const table = document.createElement('table');
  const head = table.createTHead();
  const body = table.createTBody();

  table.append(head);
  table.append(body);

  const firstRow = table.insertRow(0);

  for (const day of week) {
    const item = document.createElement('th');

    item.append(day);
    firstRow.append(item);
  }

  for (let i = 1; i <= rows; i++) {
    const row = table.insertRow(i);

    for (let j = 0; j < 7; j++) {
      const cell = row.insertCell(j);

      if (date <= days) {
        cell.append(date);
        date++;
      }
    }
  }
  element.append(table);
}

calendarTable(2020, 6, calendar);
