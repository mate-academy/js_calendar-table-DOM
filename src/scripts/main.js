'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const firstDay = new Date(year, month - 1, 0).getDay();
  const lastDay = new Date(year, month, 0).getDate();
  const table = document.createElement('table');

  element.append(table);

  // Table Header

  const tableHeader = document.createElement('thead');

  table.append(tableHeader);

  for (const weekDayName of weekDays) {
    const weekDay = document.createElement('th');

    weekDay.innerText = weekDayName;
    tableHeader.append(weekDay);
  }

  // Table Body

  const daysInMonth = new Date(year, month, 0).getDate();
  const weeksInMonth = Math.ceil((daysInMonth + firstDay) / 7);

  const tableBody = document.createElement('tbody');

  table.append(tableBody);

  for (let i = 0; i < weeksInMonth; i++) {
    const week = document.createElement('tr');

    tableBody.append(week);

    for (let j = 1; j <= 7; j++) {
      const weekDay = document.createElement('td');

      week.append(weekDay);
    }
  }

  // Numeration

  let dayCounter = 1;

  for (let i = firstDay; i < lastDay + firstDay; i++) {
    const td = document.querySelectorAll('td')[i];

    td.textContent = dayCounter;
    dayCounter++;
  };
}
calendarTable(2020, 11, calendar);
