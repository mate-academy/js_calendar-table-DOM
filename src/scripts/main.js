'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const date = new Date(year, month - 1);
  const numberOfDays = new Date(year, month, 0).getDate();
  const firstDay = (date.getDay() || 7) - 1;

  const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

  const createEl = (tagName, wrapper) => {
    const inner = document.createElement(tagName);

    wrapper.append(inner);

    return inner;
  };

  const table = createEl('table', element);
  const tHead = createEl('thead', table);
  const tBody = createEl('tbody', table);

  const headRow = createEl('tr', tHead);

  days.forEach(dayWeek => {
    const daysWeek = createEl('th', headRow).textContent = dayWeek;

    return daysWeek;
  });

  let counterOfDays = 1;

  while (counterOfDays < numberOfDays) {
    const row = createEl('tr', tBody);

    for (let i = 0; i < 7; i++) {
      const cell = createEl('td', row);

      if ((i < firstDay && counterOfDays === 1)
        || counterOfDays > numberOfDays) {
        continue;
      }

      cell.textContent = counterOfDays;

      counterOfDays++;
    }
  }
}

calendarTable(2019, 10, calendar);
