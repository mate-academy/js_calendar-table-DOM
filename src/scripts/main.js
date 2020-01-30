'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const firstDay = new Date(year, month - 1).getDay();
  const daysInMonth = 32 - new Date(year, month - 1, 32).getDate();

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const table = document.createElement('table');
  const daysOfWeek = document.createElement('tr');

  element.innerHTML = '';
  element.append(table);
  table.append(daysOfWeek);

  for (let i = 0; i <= 6; i++) {
    const dayOfWeek = document.createElement('th');

    const number = days[i];

    dayOfWeek.innerHTML = number;

    daysOfWeek.append(dayOfWeek);
  }

  let amountOfWeeks;

  if (daysInMonth === 28 && firstDay === 1) {
    amountOfWeeks = 4;
  } else if ((daysInMonth === 31 && (!firstDay || firstDay === 6))
    || (daysInMonth === 30 && !firstDay)) {
    amountOfWeeks = 6;
  } else {
    amountOfWeeks = 5;
  }

  for (let i = 0; i < amountOfWeeks; i++) {
    const week = document.createElement('tr');

    table.append(week);

    for (let j = 0; j < 7; j++) {
      const day = document.createElement('td');

      day.className = 'day';
      week.append(day);
    }
  }

  const allCellsForDays = document.querySelectorAll('.day');
  let emptyCells;

  if (!firstDay) {
    emptyCells = 6;
  } else if (firstDay > 1) {
    emptyCells = firstDay - 1;
  }

  for (let i = 0; i < emptyCells; i++) {
    allCellsForDays[i].classList.remove('day');
  }

  const daysOfMonth = document.querySelectorAll('.day');

  for (let i = 0; i < daysInMonth; i++) {
    const currentDay = daysOfMonth[i];

    currentDay.textContent = i + 1;
  }
}

calendarTable(2020, 1, calendar);
