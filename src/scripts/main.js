'use strict';

const calendar = document.querySelector('#calendar');

const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
const week = 7;

const dayNumber = date => {
  return date.getDay() === 0 ? week : date.getDay();
};

function calendarTable(year, month, element) {
  const numberOfMonth = month - 1;
  const date = new Date(year, numberOfMonth);
  let createCalendar = `<table><thead><tr>
                        ${daysOfWeek.map(day => `<th>${day}</th>`).join('')}
                        </tr></thead><tbody><tr>`;

  for (let i = 0; i < dayNumber(date) - 1; i++) {
    createCalendar += '<td></td>';
  }

  while (date.getMonth() === numberOfMonth) {
    createCalendar += `<td>${date.getDate()}</td>`;

    if (dayNumber(date) % week === 0) {
      createCalendar += '</tr><tr>';
    }

    date.setDate(date.getDate() + 1);
  }

  if (dayNumber(date) !== 0) {
    for (let i = dayNumber(date); i <= week; i++) {
      createCalendar += '<td></td>';
    }
  }

  createCalendar += '</tr></tbody></table>';

  element.innerHTML = createCalendar;
}

calendarTable(2020, 4, calendar);
