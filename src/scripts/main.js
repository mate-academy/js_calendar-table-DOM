'use strict';

const calendar = document.querySelector('#calendar');

const getDaysFromMoth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const getFistDayOfMonth = (date) => {
  let day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day - 1;
};

const addDays = () => {
  const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'];

  return days.map(day => `<th>${day}</th>`).join('');
};

const calendarTable = (year, month, element) => {
  const currentMonth = month - 1;
  const day = new Date(year, currentMonth);

  const emptyCellsInBegin = () => {
    let emptyCell = ``;

    for (let i = 0; i < getFistDayOfMonth(new Date(year, currentMonth)); i++) {
      emptyCell += `<td></td>`;
    }

    return emptyCell;
  };

  const allDatesInMonth = () => {
    let dates = ``;

    for (let i = 1; i <= getDaysFromMoth(month, year); i++) {
      dates += `<td>${i}</td>`;

      if (getFistDayOfMonth(day) === 6) {
        dates += `</tr><tr>`;
      }

      day.setDate(day.getDate() + 1);
    }

    return dates;
  };

  const emptyCellsInEnd = () => {
    let emptyCell = ``;

    if (getFistDayOfMonth(day) !== 0) {
      for (let i = getFistDayOfMonth(day); i < 7; i++) {
        emptyCell += `<td></td>`;
      }

      return emptyCell;
    }
  };

  element.innerHTML
    = `<table>
        <tr>${addDays()}</tr>
        ${emptyCellsInBegin()}
        ${allDatesInMonth()}
        ${emptyCellsInEnd()}
       </table>`;
};

calendarTable(2019, 11, calendar);
