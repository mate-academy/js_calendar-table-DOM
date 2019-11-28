/* eslint-disable indent */
'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  let firstDay = new Date(year, month - 1, 0).getDay();

  firstDay = firstDay === 0 ? 7 : firstDay;

  const numberOfDays = Array(new Date(year, month + 1, 0).getDate()).fill('')
                       .map((i, index) => index + 1);

  const lastDay = new Date(year, month - 1, numberOfDays.length).getDay();

  const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'];

  element.innerHTML = `
    <table>
      <thead>
        <tr>
          ${days.map(day => `<th>${day}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        <tr>
          ${Array(firstDay).fill('').map(item => `<td></td>`).join('')}
          ${numberOfDays.map((day, index) => {
            if ((firstDay + index) % 7 === 0) {
              return `<tr><td>${day}</td>`;
            };

            return `<td>${day}</td>`;
          }).join('')}
          ${Array(7 - lastDay === 7 ? 0 : 7 - lastDay).fill('')
              .map(item => `<td></td>`).join('')}
      </tbody>
    </table>
  `;

  return element;
}

calendarTable(2019, 11, calendar);
