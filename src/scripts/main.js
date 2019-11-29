'use strict';

const calendar = document.querySelector('#calendar');

const calendarTable = (year, month, element) => {
  const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'];
  let firstCalendarDay = new Date(year, month - 1, 0).getDay();

  firstCalendarDay = firstCalendarDay === 0 ? 7 : firstCalendarDay;

  const daysQuantity = Array(new Date(year, month + 1, 0).getDate())
    .fill('')
    .map((i, index) => index + 1);

  const lastDay = new Date(year, month - 1, daysQuantity.length).getDay();

  element.innerHTML = `
    <table>
      <thead>
        <tr>
          ${days.map(day => `<th>${day}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        <tr>
${Array(firstCalendarDay)
    .fill('<td></td>')
    .reduce((row, cell) => row + cell, '')}
${daysQuantity
    .map((day, index) => {
      if ((firstCalendarDay + index) % 7 === 0) {
        return `<tr><td>${day}</td>`;
      }

      return `<td>${day}</td>`;
    })
    .join('')
}
${Array(lastDay)
    .fill('<td></td>')
    .reduce((row, cell) => row + cell, '')}
      </tbody>
    </table>
  `;

  return element;
};

calendarTable(2019, 11, calendar);
