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

  const emptyCells = function() {
    let start = ``;

    for (let i = 0; i < startDay(date); i++) {
      start += `<td></td>`;
    }

    let end = ``;

    if (startDay(date) !== 0) {
      for (let i = startDay(date); i < 7; i++) {
        end += `<td></td>`;
      }
    }

    return { start, end };
  };

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
                      ${emptyCells().start}
                      ${allDatesInMonth()}
                      ${emptyCells().end}
                      </table>`;
};

calendarTable(2019, 10, calendar);
