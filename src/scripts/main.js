'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const weekDays = ['Пн', 'Вт', 'Сд', 'Чт', 'Пт', 'Сб', 'Нд'];
  const table = document.createElement('table');
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDay = 32 - new Date(year, month - 1, 32).getDate();
  let actualDay = 1;
  let counter = 1;

  element.append(table);

  for (let i = 1; i <= 6; i++) {
    table.insertAdjacentHTML(
      'beforeend',
      `<tr id='week${i}'></tr>`
    );
  }

  const articleWeek = document.querySelector('#week1');

  weekDays.map((days) => {
    articleWeek.insertAdjacentHTML(
      'beforeend',
      `<th>${days}</th>`
    );
  });

  for (let i = 2; i <= 6; i++) {
    const actualWeek = document.querySelector(`#week${i}`);

    for (let j = 1; j <= 7; j++) {
      const cell = document.createElement('td');

      actualWeek.append(cell);

      if (counter >= firstDay && actualDay <= lastDay) {
        cell.textContent = actualDay++;
      }
      counter++;
    }
  }
}
calendarTable(2020, 6, calendar);
