'use strict';

const calendar = document.querySelector('#calendar');

const dayNumber = date => {
  return date.getDay() === 0 ? 7 : date.getDay();
};

function calendarTable(year, month, element) {
  const numberOfMonth = month - 1;
  const date = new Date(year, numberOfMonth);
  let createCalendar = `<table><thead>
               <tr><th>ПН</th><th>ВТ</th>
               <th>СР</th><th>ЧТ</th>
               <th>ПТ</th><th>СБ</th>
               <th>ВС</th></tr></thead><tbody><tr>`;

  for (let i = 0; i < dayNumber(date) - 1; i++) {
    createCalendar += '<td></td>';
  }

  while (date.getMonth() === numberOfMonth) {
    createCalendar += `<td>${date.getDate()}</td>`;

    if (dayNumber(date) % 7 === 0) {
      createCalendar += '</tr><tr>';
    }

    date.setDate(date.getDate() + 1);
  }

  if (dayNumber(date) !== 0) {
    for (let i = dayNumber(date); i <= 7; i++) {
      createCalendar += '<td></td>';
    }
  }

  createCalendar += '</tr></tbody></table>';

  element.innerHTML = createCalendar;
}

calendarTable(2020, 4, calendar);
