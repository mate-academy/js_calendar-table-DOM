'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  // WRITE YOUR CODE HERE
  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const firstWeekDay = new Date(year, month, 1).getDay();
  const lastMonthDay = new Date(year, month + 1, 0).getDate();
  const calendarRows = (firstWeekDay + lastMonthDay) / 7;
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  const thead = table.createTHead();
  const headRow = thead.insertRow();

  element.append(table);
  table.append(thead);
  table.append(tbody);

  for (const day of weekDays) {
    const th = document.createElement('th');

    headRow.appendChild(th);
    th.textContent = day;
  }

  let dateDay = 1;

  for (let i = 0; i < calendarRows; i++) {
    const tr = tbody.insertRow();

    for (let j = 0; j < 7; j++) {
      const td = document.createElement('td');

      tr.append(td);

      if ((!i && j >= firstWeekDay)
          || (i && dateDay <= lastMonthDay)) {
        td.textContent = dateDay++;
      }
    }
  }
}

calendarTable(2001, 1, calendar);
