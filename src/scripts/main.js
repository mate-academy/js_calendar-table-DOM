'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  // WRITE YOUR CODE HERE
  const days = Math.round((new Date(year, month)
    - new Date(year, month - 1))
    / 24 / 3600 / 1000);
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  let tr = document.createElement('tr');
  const nameOfDays = {
    1: 'пн',
    2: 'вт',
    3: 'ср',
    4: 'чт',
    5: 'пт',
    6: 'сб',
    7: 'вс',
    'Mon': 1,
    'Tus': 2,
    'Wed': 3,
    'Thu': 4,
    'Fri': 5,
    'Sat': 6,
    'Sun': 7,
  };
  const day = nameOfDays[new Date(year, month - 1).toString().split(' ')[0]];
  let count = 2 - day;

  element.append(table);
  table.append(thead);
  table.append(tbody);
  thead.append(tr);
  table.className = 'table';
  tr.className = 'tr';

  for (let i = 1; i <= 7; i++) {
    const th = document.createElement('th');

    th.className = 'th';
    th.textContent = nameOfDays[i];
    tr.append(th);
  }

  for (let i = 0; i < (day + days - 1) / 7; i++) {
    tr = document.createElement('tr');
    tr.className = 'tr';
    tbody.append(tr);

    for (let j = 0; j < 7; j++) {
      const td = document.createElement('td');

      if (count <= days && count >= 1) {
        td.textContent = count;
      }
      count++;
      td.className = 'td)';
      tr.append(td);
    }
  }
}

calendarTable(2020, 3, calendar);
