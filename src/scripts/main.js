'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  let content = '<table><tr>';
  const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const daysInMonth = 32 - new Date(year, month - 1, 32).getDate();
  let firstDayInMonth = new Date(year, month - 1).getDay();
  let lastDayInMonth = new Date(year, month - 1, daysInMonth).getDay();

  for (let i = 0; i < days.length; i++) {
    content += `<th>${days[i]}</th>`;
  }

  content += '</tr><tr>';

  if (firstDayInMonth === 0) {
    firstDayInMonth = 7;
  }

  if (lastDayInMonth === 0) {
    lastDayInMonth = 7;
  }

  for (let i = 0; i < firstDayInMonth - 1; i++) {
    content += '<td></td>';
  }

  for (let i = 1; i <= daysInMonth; i++) {
    if ((firstDayInMonth + i) % 9 === 0) {
      content += '</tr><tr>';
      firstDayInMonth = firstDayInMonth + 2;
    }
    content += `<td>${i}</td>`;
  }

  for (let i = 0; i < 7 - lastDayInMonth; i++) {
    content += '<td></td>';
  }

  content += '</tr></table>';

  calendar.innerHTML = content;
}

calendarTable(2019, 10, calendar);
