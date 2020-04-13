'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  // WRITE YOUR CODE HERE
  const week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'];
  const date = new Date(year, month, 0);
  const daysInMonth = date.getDate();
  const prevDate = new Date(year, month - 1);
  const emptyCells = prevDate.getDay() === 0 ? 6 : prevDate.getDay() - 1;
  const restEmptyCells = ((daysInMonth + emptyCells) % 7) === 0 ? 0
    : (7 - (daysInMonth + emptyCells) % 7);

  element.innerHTML = `
    <table>
      <thead>
        <tr>
          ${week.map(day => `<th>${day}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        <tr>
        ${Array(emptyCells).fill('').map(cell => `<td></td>`).join('')}
        ${Array(daysInMonth).fill('').map((cell, i) => (emptyCells + i) % 7 === 0
    ? `<tr><td>${i + 1}</td>` : `<td>${i + 1}</td>`).join('')}
        ${Array(restEmptyCells).fill('').map(cell => `<td></td>`).join('')}
      </tbody>
    </table>
  `;

  return element;
}

calendarTable(2019, 10, calendar);
