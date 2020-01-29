'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  let content = '<table><tr>';
  const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const daysInMonth = 32 - new Date(year, month - 1, 32).getDate();
  let dayWeekNumberStart = new Date(year, month - 1).getDay();
  let dayWeekNumberEnd = new Date(year, month - 1, daysInMonth).getDay();

  for (let i = 0; i < days.length; i++) {
    content += `<th>${days[i]}</th>`;
  }

  content += '</tr><tr>';

  if (dayWeekNumberStart === 0) {
    dayWeekNumberStart = 7;
  }

  if (dayWeekNumberEnd === 0) {
    dayWeekNumberEnd = 7;
  }

  for (let i = 0; i < dayWeekNumberStart - 1; i++) {
    content += '<td></td>';
  }

  for (let i = 1; i <= daysInMonth; i++) {
    if ((dayWeekNumberStart + i) % 9 === 0) {
      content += '</tr><tr>';
      dayWeekNumberStart = dayWeekNumberStart + 2;
    }
    content += `<td>${i}</td>`;
  }

  for (let i = 0; i < 7 - dayWeekNumberEnd; i++) {
    content += '<td></td>';
  }

  content += '</tr></table>';

  calendar.innerHTML = content;
}

calendarTable(2019, 10, calendar);
