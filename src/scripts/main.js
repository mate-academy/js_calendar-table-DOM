'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  element.innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Пн</th>
        <th>Вт</th>
        <th>Ср</th>
        <th>Чт</th>
        <th>Пт</th>
        <th>Сб</th>
        <th>Нд</th>
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
    const tr = document.createElement('tr');

    tableBody.append(tr);

    for (let j = 1; j <= 7; j++) {
      const weekDay = document.createElement('td');

      tr.append(weekDay);
    }
  }

  let counter = 1;

  for (let i = firstDay; i < lastDay + firstDay; i++) {
    const td = document.querySelectorAll('td')[i];

    td.textContent = counter;
    counter++;
  };
}
calendarTable(2020, 2, calendar);
