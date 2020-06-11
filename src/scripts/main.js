/* eslint-disable no-console */
'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const firstMonthDay = new Date(`${year} ${month} 1`).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  element.append(table);
  table.append(thead);
  table.append(tbody);

  for (let i = 0; i < weekDays.length; i++) {
    const th = document.createElement('th');

    th.textContent = weekDays[i];

    thead.append(th);
  }

  let cell = 1;
  const trBody0 = document.createElement('tr');
  const trBody1 = document.createElement('tr');
  const trBody2 = document.createElement('tr');
  const trBody3 = document.createElement('tr');
  const trBody4 = document.createElement('tr');

  function appendElements(tr, td) {
    tbody.append(tr);
    tr.append(td);
  }

  while (cell < daysInMonth + firstMonthDay) {
    const tdBody = document.createElement('td');

    if (cell > firstMonthDay - 1) {
      tdBody.textContent = cell - firstMonthDay + 1;
    }

    if (cell > 0 && cell < 8) {
      appendElements(trBody0, tdBody);
    } else if (cell > 7 && cell < 15) {
      appendElements(trBody1, tdBody);
    } else if (cell > 14 && cell < 22) {
      appendElements(trBody2, tdBody);
    } else if (cell > 21 && cell < 29) {
      appendElements(trBody3, tdBody);
    } else if (cell > 28) {
      appendElements(trBody4, tdBody);
    }

    cell++;
  }
}

calendarTable(2020, 6, calendar);
