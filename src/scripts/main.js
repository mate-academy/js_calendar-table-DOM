'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const daysOfWeek = [ 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс' ];
  const daysInWeek = 7;
  const firstDay = new Date(`${year}-${month}-1`);
  const firstDayOfWeek = (firstDay.getDay() === 0) ? 7 : firstDay.getDay();
  const emptyStartCellsQty = firstDayOfWeek - 1;
  const daysQty = new Date(year, month, 0).getDate();
  const weeksQty = Math.ceil((daysQty + emptyStartCellsQty) / daysInWeek);

  const daysArray = [];

  for (let i = 1; i <= weeksQty * daysInWeek; i++) {
    const day = i - emptyStartCellsQty;

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
    return ((i + 1) % daysInWeek === 0) ? `${day}</tr><tr>` : day;
  }).join('')}
  </tr>
</table>
  `;
}

calendarTable(2020, 5, calendar);
