'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  let firstDayofWeek = new Date(year, month - 1, 0).getDay();
  const daysOfMonth = new Date(year, month, 0).getDate();
  const weeksOfMonth = Math.ceil(daysOfMonth / 7);
  const daysOfTheWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  let nameDays = '';
  let nameCalendarContent = '';
  let dayCount = 1;

  for (let i = 0; i < daysOfTheWeek.length; i++) {
    nameDays += `<th>${daysOfTheWeek[i]}</th>`;
  }

  for (let j = 0; j < weeksOfMonth; j++) {
    nameCalendarContent += `<tr>`;

    for (let i = 0; i < daysOfTheWeek.length; i++) {
      if (firstDayofWeek > 0 || dayCount > daysOfMonth) {
        nameCalendarContent += `<td></td>`;
        firstDayofWeek--;
      } else {
        nameCalendarContent += `<td>${dayCount}</td>`;
        dayCount++;
      }
    }
    nameCalendarContent += `</tr>`;
  }

  element.innerHTML = `
    <table>
      <thead>
        <tr>
          ${nameDays}
        </tr>
      </thead>
      <tbody>
        ${nameCalendarContent}
      </tbody>
    </table>
  `;
}

calendarTable(2019, 10, calendar);
