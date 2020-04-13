'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const firstDay = new Date(year, month - 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const weeksCounter = Math.ceil(daysInMonth / 7);
  const daysName = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const isPresentDay = [];

  for (let i = 0; i < weeksCounter * 7; i++) {
    const thisDay = i - firstDay + 1;

    if (thisDay > 0 && thisDay <= daysInMonth) {
      isPresentDay.push(`<td class="active__td">${thisDay}</td>`);
    } else {
      isPresentDay.push(`<td></td>`);
    }
  }

  element.innerHTML = `
    <table>
      <thead>
        <tr>
          ${daysName.map(day => `<th>${day}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        <tr>
          ${isPresentDay
    .map((day, index) => {
      return (index + 1) % 7 === 0 ? `${day}</tr><tr>` : day;
    })
    .join('')}
        </tr>
      </tbody>
    </table>
  `;
}

calendarTable(2019, 8, calendar);
