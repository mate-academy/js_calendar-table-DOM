'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  let table = `
    <table>
      <tr>
        <th>ПН</th>
        <th>ВТ</th>
        <th>СР</th>
        <th>ЧТ</th>
        <th>ПТ</th>
        <th>СБ</th>
        <th>НД</th>
      </tr>`;
  const day = new Date(year, month);

  for (let i = 0; i < getDay(day); i++) {
    table += '<td></td>';
  }

  while (day.getMonth() === month) {
    table += `<td>${day.getDate()}</td>`;

    if (getDay(day) % 7 === 6) {
      table += `</tr><tr>`;
    }

    day.setDate(day.getDate() + 1);
  }

  if (getDay(day) !== 0) {
    for (let i = getDay(day); i < 7; i++) {
      table += `<td></td>`;
    }
  }

  table += `</tr></table>`;

  element.innerHTML = table;
}

function getDay(date) {
  let day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day - 1;
}

calendarTable(2020, 5, calendar);
