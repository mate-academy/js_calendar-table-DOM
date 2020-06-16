/* eslint-disable no-console */
'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  let firstMonthDay = new Date(`${year} ${month} 1`).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  if (firstMonthDay === 0) {
    firstMonthDay = 7;
  }
  element.append(table);
  table.append(thead);
  table.append(tbody);

  for (let i = 0; i < weekDays.length; i++) {
    const th = document.createElement('th');

    th.textContent = weekDays[i];

    thead.append(th);
  }

  let cell = 1;
  const tr0 = document.createElement('tr');
  const tr1 = document.createElement('tr');
  const tr2 = document.createElement('tr');
  const tr3 = document.createElement('tr');
  const tr4 = document.createElement('tr');
  const tr5 = document.createElement('tr');

  function appendElements(tr, td) {
    tbody.append(tr);
    tr.append(td);
  }

  while (cell < daysInMonth + firstMonthDay) {
    const td = document.createElement('td');

    if (cell > firstMonthDay - 1) {
      td.textContent = cell - firstMonthDay + 1;
    }

    if (cell > 0 && cell < 8) {
      appendElements(tr0, td);
    } else if (cell > 7 && cell < 15) {
      appendElements(tr1, td);
    } else if (cell > 14 && cell < 22) {
      appendElements(tr2, td);
    } else if (cell > 21 && cell < 29) {
      appendElements(tr3, td);
    } else if (cell > 28 && cell < 36) {
      appendElements(tr4, td);
    } else {
      appendElements(tr5, td);
    }
    cell++;
  }
}

calendarTable(2018, 7, calendar);
