'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  // WRITE YOUR CODE HERE
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  const week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'];
  const date = new Date(year, month, 0);
  const daysInMonth = date.getDate();
  const prevDate = new Date(year, month - 1);
  const emptyCeils = prevDate.getDay() === 0 ? 6 : prevDate.getDay() - 1;
  const restEmptyCeils = ((daysInMonth + emptyCeils) % 7) === 0 ? 0
    : (7 - (daysInMonth + emptyCeils) % 7);
  const countOfCeils = daysInMonth + emptyCeils + restEmptyCeils;

  for (let i = 0; i < week.length; i++) {
    const th = document.createElement('th');

    th.innerHTML = week[i];
    tr.append(th);
  }
  table.append(tr);

  tr = document.createElement('tr');

  for (let i = 1; i <= countOfCeils; i++) {
    if (i <= emptyCeils || i > (emptyCeils + daysInMonth)) {
      td = document.createElement('td');
      td.innerHTML = '';
    } else {
      td = document.createElement('td');
      td.innerHTML = i - emptyCeils;
    }

    tr.append(td);

    if (i % 7 === 0 && i !== countOfCeils) {
      tbody.append(tr);
      tr = document.createElement('tr');
    } else {
      tbody.append(tr);
    }
  }

  table.append(tbody);
  element.append(table);

  return element;
}

calendarTable(2019, 9, calendar);
