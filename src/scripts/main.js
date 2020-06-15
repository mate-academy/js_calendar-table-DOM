'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(element, year, month) {
  // WRITE YOUR CODE HERE
  const mon = month - 1;
  const d = new Date(year, mon);

  let table = `<table>
  <tr><th>MO</th>
  <th>TU</th>
  <th>WE</th>
  <th>TH</th>
  <th>FR</th>
  <th>SA</th>
  <th>SU</th>
  </tr><tr>`;

  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  while (d.getMonth() === mon) {
    table += '<td>' + d.getDate() + '</td>';

    if (getDay(d) % 7 === 6) {
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) !== 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';

  element.innerHTML = table;
}

function getDay(date) {
  let day = date.getDay();

  if (day === 0) {
    day = 7;

    return day - 1;
  }
}

calendarTable(calendar, 2020, 6);
