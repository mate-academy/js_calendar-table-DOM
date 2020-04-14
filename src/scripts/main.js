'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const dayInWeek = 7;
  let firstDay = new Date(year, month - 1).getDay() - 1;
  const daysInMonth = new Date(year, month, 0).getDate();
  let weeksCounter = Math.ceil(daysInMonth / dayInWeek);
  const daysName = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const isPresentDay = [];

  if (firstDay < 0) {
    weeksCounter = weeksCounter + 1;
    firstDay = firstDay + dayInWeek;
  }

  for (let i = 0; i < weeksCounter * 7; i++) {
    const thisDay = i - firstDay + 1;

    if (thisDay > 0 && thisDay <= daysInMonth) {
      isPresentDay.push(`<td class="active__td">${thisDay}</td>`);
    } else {
      isPresentDay.push(`<td class="non-active__td"></td>`);
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

calendarTable(2020, 3, calendar);
