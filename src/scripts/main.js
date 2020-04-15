'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const date = new Date(year, month - 1, 1);
  let firstDay = date.getDay();
  const daysCount = new Date(year, month, 0).getDate();
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const rowsCount = Math.ceil((daysCount + firstDay) / 7) + 1;
  const weekDays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  let number = 1;

  table.append(thead);
  table.append(tbody);

  for (let i = 0; i < rowsCount; i++) {
    const tr = document.createElement('tr');

    if (i === 0) {
      thead.append(tr);
    } else {
      tbody.append(tr);
    }

    for (let j = 0; j < weekDays.length; j++) {
      const th = document.createElement('th');
      const td = document.createElement('td');

      if (i === 0) {
        th.innerHTML = weekDays[j];
        tr.append(th);
      } else {
        if (firstDay - 1 > 0 || number > daysCount) {
          firstDay--;
        } else {
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
