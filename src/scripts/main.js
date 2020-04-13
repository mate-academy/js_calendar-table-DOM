'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const daysOfWeek = [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ];

  const firstDay = new Date(`${year}-${month}-1`);
  const daysQty = new Date(year, month, 0).getDate();
  const weeksQty = Math.ceil((daysQty + firstDay.getDay()) / 7);

  const daysArray = [];

  for (let i = 0; i < weeksQty * 7; i++) {
    const day = i - firstDay.getDay() + 1;

    if (day > 0 && day <= daysQty) {
      daysArray.push(`<td>${day}</td>`);
      continue;
    }

    daysArray.push(`<td></td>`);
  }

  calendar.innerHTML = `
<table>
  <tr>
    ${daysOfWeek.map(day => `<th>${day}</th>`).join('')}
  </tr>
  <tr>
  ${daysArray.map((day, i) => {
    return ((i + 1) % 7 === 0) ? `${day}</tr><tr>` : day;
  }).join('')}
  </tr>
</table>
  `;
}

calendarTable(2019, 10, calendar);
