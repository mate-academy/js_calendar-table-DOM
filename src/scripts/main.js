'use strict';

const calendar = document.querySelector('#calendar');

const getDaysInMonth = function(month, year) {
  return new Date(year, month, 0).getDate();
};
const getDay = function(date) {
  let day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day - 1;
};

const addDays = function() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return days.map(day => `<th>${day}</th>`).join('');
};

const calendarTable = function(year, month, element) {
  const mon = month - 1;
  const d = new Date(year, mon);

  const emptyFieldsBegin = function() {
    let empty = ``;

    for (let i = 0; i < getDay(new Date(year, mon)); i++) {
      empty += `<td></td>`;
    }

    return empty;
  };
  const allDatesInMonth = function() {
    let dates = ``;

    for (let j = 1; j <= getDaysInMonth(month, year); j++) {
      dates += `<td>${j}</td>`;

      if (getDay(d) % 7 === 6) {
        dates += `</tr><tr>`;
      }
      d.setDate(d.getDate() + 1);
    }

    return dates;
  };

  const addEmptyFieldsEnd = function() {
    let empty = ``;

    if (getDay(d) !== 0) {
      for (let i = getDay(d); i < 7; i++) {
        empty += `<td></td>`;
      }

      return empty;
    }
  };

  element.innerHTML = `<table>
                      <tr>${addDays()}</tr>
                      ${emptyFieldsBegin()}
                      ${allDatesInMonth()}
                      ${addEmptyFieldsEnd()}
                      </table>`;
};

calendarTable(2019, 10, calendar);
