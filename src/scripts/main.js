'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const date = new Date(year, month - 1, 1);
  const firstDay = date.getDay();
  const days = new Date(year, month - 1, 0).getDate();
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  let number = 7 - (firstDay - 1) + 1;
  let firstWeekNumber = 1;

  table.append(thead);
  table.append(tbody);

  for (let i = 0; i < 6; i++) {
    const tr = document.createElement('tr');

    if (i === 0) {
      thead.append(tr);
    } else {
      tbody.append(tr);
    }

    for (let j = 0; j < 7; j++) {
      const th = document.createElement('th');
      const td = document.createElement('td');

      if (i === 0) {
        th.innerHTML = weekDays[j];
        tr.append(th);
      } else {
        if ((i === 1) && (j >= firstDay - 1)) {
          td.innerHTML = firstWeekNumber;
          firstWeekNumber++;
        }

        if ((i >= 2) && (number <= days)) {
          td.innerHTML = number;
          number++;
        }

        tr.append(td);
      }
    }
  }

  calendar.append(table);
}

calendarTable(2019, 10, calendar);
