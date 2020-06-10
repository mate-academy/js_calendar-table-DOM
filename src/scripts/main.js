/* eslint-disable no-console */
'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const daysInMonth = 33 - new Date(year, month - 1, 33).getDate();
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const firstMonthDay = new Date(`${year} ${month} 1`).getDay();

  element.append(table);
  table.append(thead);
  table.append(tbody);

  for (let i = 0; i < weekDays.length; i++) {
    const th = document.createElement('th');

    th.textContent = weekDays[i];

    thead.append(th);
  }

  let cell = 1;

  while (cell < daysInMonth + firstMonthDay) {
    let tdBody;

    if (cell % 7 === 1) {
      tdBody = document.createElement('tr');

      tbody.append(tdBody);
    }
    tdBody = document.createElement('td');

    if (cell > firstMonthDay - 1) {
      tdBody.textContent = cell - firstMonthDay + 1;
    }
    tbody.append(tdBody);
    cell++;
  }
}

calendarTable(2019, 10, calendar);
