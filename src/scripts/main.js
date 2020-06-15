'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const date = new Date(year, month - 1, 0);
  const firstDay = date.getDay() === 0 ? 7 : date.getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

  const table = document.createElement('table');
  const tHead = document.createElement('thead');
  const tBody = document.createElement('tbody');
  const headTr = document.createElement('tr');

  for (const day of days) {
    const cellDay = document.createElement('th');

    cellDay.textContent = day;
    headTr.append(cellDay);
  }
  tHead.append(headTr);

  let week = document.createElement('tr');

  const quantityCells = firstDay > 4 && daysInMonth >= 30 ? 42 : 35;

  for (let i = 1; i <= quantityCells; i++) {
    ((i - 1) % 7 === 0) && (week = document.createElement('tr'));

    tBody.append(week);

    const cellCalendar = document.createElement('td');

    if (i <= firstDay || i > daysInMonth + firstDay) {
      cellCalendar.textContent = '';
    } else {
      cellCalendar.textContent = i - firstDay;
    }
    week.append(cellCalendar);
  }

  table.append(tHead);
  table.append(tBody);
  element.append(table);
}

calendarTable(2019, 11, calendar);
