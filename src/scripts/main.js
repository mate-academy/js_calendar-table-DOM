
'use strict';

const calendar = document.querySelector('#calendar');

const today = new Date();

const currentMonth = today.getMonth() + 1;
const currentDay = today.getDate();
const currentYear = today.getFullYear();

function calendarTable(year, month, element) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const date = new Date(year, month - 1);

  element.innerHTML = `<h3>${date.getFullYear()} / ${
    months[date.getMonth()]}</h3>`;

  const table = document.createElement('table');

  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  const countDays = new Date(year, month, 0).getDate();

  const dayOfWeek = new Date(year, month - 1).getDay() || 7;
  let day = 2 - dayOfWeek;

  thead.innerHTML = `<tr>
        <th>Пн</th>
        <th>Вт</th>
        <th>Ср</th>
        <th>Чт</th>
        <th>Пт</th>
        <th>Сб</th>
        <th>Вс</th>
      </tr>`;
  table.appendChild(thead);

  while (day <= countDays) {
    const tr = document.createElement('tr');

    for (let i = 0; i < 7; i++) {
      const td = document.createElement('td');

      if (day >= 1 && day <= countDays) {
        if (
          currentDay === day
          && currentMonth === month
          && year === currentYear
        ) {
          td.classList.add('active');
        }
        td.innerText = day;
      }
      tr.appendChild(td);
      day++;
    }

    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  element.appendChild(table);
}

calendarTable(currentYear, currentMonth, calendar);
// calendarTable(2019, 10, calendar);
