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

  console.log(daysInMonth);

  // eslint-disable-next-line no-console
  // console.log(firstMonthDay);

  element.append(table);
  table.append(thead);
  table.append(tbody);

  for (let i = 0; i < weekDays.length; i++) {
    const th = document.createElement('th');

    th.textContent = weekDays[i];

    thead.append(th);
  }

  let day = 1;

  while (day < daysInMonth + firstMonthDay) {
    let tdBody;

    if (day % 7 === 1) {
      tdBody = document.createElement('tr');

      tbody.append(tdBody);
    }
    tdBody = document.createElement('td');

    if (day > firstMonthDay - 1) {
      tdBody.textContent = day - firstMonthDay + 1;
    }
    tbody.append(tdBody);
    day++;
  }
}

calendarTable(2019, 10, calendar);
