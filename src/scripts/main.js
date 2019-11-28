'use strict';

const calendar = document.querySelector('#calendar');

const getDaysInMonth = function(month, year) {
  return new Date(year, month, 0).getDate();
};
const startDay = function(date) {
  let day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day - 1;
};

const calendarTable = function(year, month, element) {
  const currentMonth = month - 1;
  const date = new Date(year, currentMonth);
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    .map(day => `<th>${day}</th>`).join('');

  const emptyCellsToStart = (number) =>
    Array(number).fill('<td></td>').reduce((row, cell) => row + cell, '');
  const emptyCellsToEnd = (number) =>
    Array(number).fill('<td></td>').reduce((row, cell) => row + cell, '');

  const allDatesInMonth = function() {
    let dates = ``;

    for (let j = 1; j <= getDaysInMonth(month, year); j++) {
      dates += `<td>${j}</td>`;

      if (startDay(date) % 7 === 6) {
        dates += `</tr><tr>`;
      }
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  element.innerHTML = `<table>
                      <tr>${weekDays}</tr>
                      ${emptyCellsToStart(startDay(date))}
                      ${allDatesInMonth()}
                      ${emptyCellsToEnd(7 - startDay(date))}
                      </table>`;
};

calendarTable(2019, 10, calendar);
