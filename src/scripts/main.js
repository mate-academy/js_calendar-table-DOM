'use strict';

const calendar = document.querySelector('#calendar');

const dayNumber = (date) => {
  let day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
};

function calendarTable(year, month, element) {
  const monthNum = month - 1;
  const date = new Date(year, monthNum);
  let table = `<table><thead><tr><th>пн</th><th>вт</th><th>ср</th>
    <th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr></thead><tbody><tr>`;

  for (let i = 1; i < dayNumber(date); i++) {
    table += '<td></td>';
  }

  while (date.getMonth() === monthNum) {
    table += `<td>${date.getDate()}</td>`;

    if (dayNumber(date) % 7 === 0) {
      table += '</tr><tr>';
    }
    date.setDate(date.getDate() + 1);
  }

  if (dayNumber(date) !== 0) {
    for (let i = dayNumber(date); i <= 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></tbody></table>';

  element.innerHTML = table;
}

calendarTable(2020, 1, calendar);
