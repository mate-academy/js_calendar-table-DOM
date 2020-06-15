'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  function daysInMonth(y, m) {
    return 32 - new Date(y, m, 32).getDate();
  };

  const monthLenght = daysInMonth(year, month);

  const date = new Date(year, month);
  const startPosition = (date.getDay() + 6) % 7;
  const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const table = document.createElement('table');

  calendar.append(table);

  const day = document.createElement('tr');

  table.append(day);

  let counter = 1;

  for (let i = 0; i < days.length; i++) {
    const dayHeader = document.createElement('th');

    dayHeader.textContent = days[i];
    day.append(dayHeader);
  };

  for (let i = 0; i < 6; i++) {
    const week = document.createElement('tr');

    table.append(week);

    for (let j = 0; j < 7; j++) {
      const currentDay = document.createElement('td');

      week.append(currentDay);
    }
  };

  for (let j = startPosition; j < 7; j++) {
    table.rows[1].cells[j].textContent = counter;
    counter++;
  };

  for (let i = 2; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
      if (counter <= monthLenght) {
        table.rows[i].cells[j].textContent = counter;
        counter++;
      }
    }
  };
}

calendarTable(2018, 6, calendar);
