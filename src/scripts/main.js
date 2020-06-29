'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const table = document.createElement('table');

  table.insertAdjacentHTML('afterbegin',
    `<tr>
              <th>пн</th>
              <th>вт</th>
              <th>ср</th>
              <th>чт</th>
              <th>пт</th>
              <th>сб</th>
              <th>вс</th>
            </tr>`
  );

  const date = new Date(year, month - 1).getDay();
  const monthFirstDay = date === 0 ? 7 : date;
  const monthDays = new Date(year, month === 12 ? 0 : month, 0).getDate();
  let day = 2 - monthFirstDay;

  while (day <= monthDays) {
    const tr = document.createElement('tr');
    const week = day + 7;

    while (day < week) {
      const td = document.createElement('td');

      td.textContent = `${day < 1 || day > monthDays ? '' : day}`;
      tr.append(td);
      day++;
    }

    table.append(tr);
  }

  element.append(table);
}

calendarTable(2019, 10, calendar);
