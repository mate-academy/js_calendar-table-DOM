'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const date = new Date(year, month - 1);
  let weekDay = date.getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  let daysCount = 1;
  const table = document.createElement('table');
  let week = '';
  let monthStr = '';
  const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  let thead = '';
  const weekLength = 7;
  const countOfWeeks = Math.ceil((weekDay + daysInMonth) / weekLength);

  for (let i = 0; i < daysOfWeek.length; i++) {
    thead += `<td>${daysOfWeek[i]}</td>`;
  };

  thead = `<thead class="thead"><tr>${thead}</tr></thead>`;

  for (let weekCount = 1; weekCount <= countOfWeeks; weekCount++) {
    for (let i = 1; i <= weekLength; i++) {
      if (weekDay > i || daysCount > daysInMonth) {
        week += `<td></td>`;
      } else {
        week += `<td>${daysCount}</td>`;
        daysCount++;
      };
    };
    weekDay = 1;
    monthStr += `<tr class="row">${week}</tr>`;
    week = '';
  };

  table.innerHTML = `${thead}<tbody>${monthStr}</tbody>`;

  element.append(table);
}

calendarTable(2019, 10, calendar);
