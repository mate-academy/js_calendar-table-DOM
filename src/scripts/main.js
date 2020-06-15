'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  element.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>ПН</th>
          <th>ВТ</th>
          <th>СР</th>
          <th>ЧТ</th>
          <th>ПТ</th>
          <th>СБ</th>
          <th>ВС</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
  `;

  const week = 7;
  let startDay = new Date(year, month - 1, 1).getDay() - 1;

  if (startDay < 0) {
    startDay = week - 1;
  };

  const lastDay = new Date(year, month, 0).getDate();
  const rows = Math.ceil(lastDay + startDay) / week;

  const tbody = document.getElementsByTagName('tbody')[0];

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');

    tbody.append(row);

    for (let j = 0; j < week; j++) {
      const cell = document.createElement('td');

      row.append(cell);
    }
  }

  let counter = 1;

  for (let i = startDay; i < lastDay + startDay; i++) {
    const td = document.getElementsByTagName('td')[i];

    td.textContent = counter;
    counter++;
  };
}

calendarTable(2020, 12, calendar);
