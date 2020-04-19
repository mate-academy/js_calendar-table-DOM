'use strict';

function calendarTable1(year, humanMonth, element) {
  const daysInWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const weeks = [];
  const month = humanMonth - 1;
  const dayInNextMonth = new Date(year, humanMonth, 1);
  const currentDate = new Date(year, month, 1);

  while (currentDate.getDay() !== 1) {
    currentDate.setDate(currentDate.getDate() - 1);
  }

  // eslint-disable-next-line no-unmodified-loop-condition
  while (currentDate < dayInNextMonth) {
    const week = [];

    for (let j = 0; j < 7; j++) {
      if (currentDate.getMonth() !== month) {
        week.push(0);
      } else {
        week.push(currentDate.getDate());
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    weeks.push(week);
  }

  element.innerHTML = `
<h1>Calendar ${year}-${humanMonth}</h1>
<table>
    <thead>
        <tr>
        ${daysInWeek.map(day => `<th>${day}</th>`).join('\n')}
        </tr>
    </thead>
    <tbody>
        ${weeks.map(week => `
        <tr>
            ${week.map(day => `
            <td>${day || ''}</td>`).join('')}
        </tr>`).join('\n')}
    </tbody>
</table>`;
}

calendarTable1(2020, 4, document.getElementById('calendar'));
