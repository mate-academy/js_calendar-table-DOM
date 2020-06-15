'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const daysInMonth = (new Date(year, month, 0)).getDate();
  const weekDay = (new Date(year, month - 1, 1).getDay() || 7) - 1;
  const rows = (daysInMonth + weekDay) / 7;
  const cal = [];
  let day = 1;

  for (let i = 0; i < rows; i++) {
    let wd = 0;

    cal.push(`<tr>`);

    if (i === 0) {
      while (wd < weekDay) {
        cal.push(`<td></td>`);
        wd++;
      }
    };

    while (wd < 7 && day <= daysInMonth) {
      cal.push(`<td>${day}</td>`);
      day++;
      wd++;
    }

    for (let y = wd; y < 7; y++) {
      cal.push(`<td></td>`);
    };

    cal.push('</tr>');
  }

  element.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>пн</th>
          <th>вт</th>
          <th>ср</th>
          <th>чт</th>
          <th>пт</th>
          <th>сб</th>
          <th>вс</th>
        </tr>
      </thead>
      <tbody>
        ${cal.join('')}
      </tbody>
    </table>
  `;
}

calendarTable(2019, 10, calendar);
