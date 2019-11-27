/* eslint-disable indent */
'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const firstDay = new Date(year, month, 0).getDay();
  const numberOfDays = Array(new Date(year, month + 1, 0).getDate()).fill('')
                       .map((item, index) => index + 1);
  const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'];

  element.innerHTML = `
    <table>
        <tr>
          ${days.map(day => `<th>${day}</th>`).join('')}
        </tr>
        <tr>
          ${Array(firstDay).fill('').map(item => `<td></td>`).join('')}
          ${numberOfDays.map((day, index) => {
            if ((firstDay + index) % 7 === 0) {
              return `<tr><td>${day}</td>`;
            };

            return `<td>${day}</td>`;
          }).join('')}
    </table>
  `;

  return element;
}

calendarTable(2019, 10, calendar);
