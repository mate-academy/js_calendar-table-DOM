'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  element.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th>Sat</th>
        <th>Sun</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  `;

  const firstDay = new Date(year, month - 1, 0).getDay();
  const lastDay = new Date(year, month, 0).getDate();

  const daysInMonth = new Date(year, month, 0).getDate();
  const weeksInMonth = Math.ceil((daysInMonth + firstDay) / 7);

  const tableBody = document.querySelector('tbody');

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
calendarTable(2020, 2, calendar);
