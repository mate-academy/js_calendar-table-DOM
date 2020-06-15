'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const daysAmount = new Date(year, month, 0).getDate();
  const firstDay = new Date(`${year}/${month}/1`).getDay();
  const daysTable = document.createElement('table');

  element.append(daysTable);

  daysTable.append(tableHead(), tableBody(daysAmount, firstDay));
}

const tableHead = () => {
  const calendarHead = document.createElement('thead');

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  for (const day of days) {
    const certainDay = document.createElement('th');

    certainDay.textContent = day;
    calendarHead.append(certainDay);
  }

  return calendarHead;
};

const tableBody = (daysAmount, firstDay) => {
  const calendarBody = document.createElement('tbody');

  const weeksAmount = Math.ceil(daysAmount / 7);

  let generalCounter = 1;
  let insertCounter = 0;

  for (let i = 0; i < weeksAmount; i++) {
    const row = document.createElement('tr');

    calendarBody.append(row);

    for (let j = 0; j < 7; j++) {
      const tableCell = document.createElement('td');

      if (generalCounter < firstDay) {
        insertCounter++;
      } else if (generalCounter >= firstDay
        && generalCounter <= daysAmount + insertCounter) {
        tableCell.textContent = generalCounter - insertCounter;
      }
      generalCounter++;
      row.append(tableCell);
    }
  }

  return calendarBody;
};

calendarTable(2020, 10, calendar);
