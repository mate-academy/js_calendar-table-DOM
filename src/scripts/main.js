'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const daysInMonth = new Date(year, month, 0).getDate();
  const startDay = new Date(`${year}, ${month}`).getDay();
  const weeks = Math.ceil((daysInMonth + startDay) / 7);
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  let tHead = '';
  let tBody = '';
  let dateCounter = 1;

  for (let i = 0; i < days.length; i++) {
    tHead += `
      <th>${days[i]}</th>
    `;
  }

  for (let row = 0; row < weeks; row++) {
    tBody += `
      <tr>
    `;

    for (let day = 0; day < days.length; day++) {
      if (row === 0 && day < startDay) {
        tBody += `
          <td></td>
        `;
      } else if (dateCounter <= daysInMonth) {
        tBody += `
          <td>${dateCounter}</td>
        `;
        dateCounter++;
      } else {
        tBody += `
          <td></td>
        `;
      }
    }
  }

  element.innerHTML = `
    <table>
      <thead>
        ${tHead}
      </thead>
      <tbody>
        ${tBody}
      </tbody>
    </table>
  `;
}

calendarTable(2019, 6, calendar);
