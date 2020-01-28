'use strict';

const DAYS = {
  0: 'mon',
  1: 'tue',
  2: 'wed',
  3: 'thu',
  4: 'fri',
  5: 'sat',
  6: 'sun',
};

const MONTH = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const calendar = document.querySelector('#calendar');

calendar.classList.add('calendar');

function calendarTable(year, month, element) {
  const daysList = document.createElement('div');

  daysList.classList.add('calendar__days-list');

  const daysArr = [];
  const daysLength = Object.keys(DAYS).length;

  for (let i = 0; i < daysLength; i += 1) {
    const day = document.createElement('div');

    day.textContent = `${DAYS[i]}`;
    day.classList.add('calendar__day');
    daysArr.push(day);
  }

  daysList.append(...daysArr);

  const datesArr = [];
  let daysQuantity = MONTH[month];

  if (year % 4 === 0 && month === 2) {
    daysQuantity = 29;
  }

  const firstDay = new Date(`${month} 1 ${year}`);
  const indent = firstDay.getDay() - 1;

  for (let i = 1; i <= 35; i += 1) {
    const date = document.createElement('div');

    date.classList.add(`calendar__date--${i}`, `calendar__date`);

    if (i > indent && i <= daysQuantity + indent) {
      date.textContent = `${i - indent}`;
    }

    datesArr.push(date);
  }

  const datesContainer = document.createElement('div');

  datesContainer.classList.add('calendar__dates-list');
  datesContainer.append(...datesArr);
  element.append(daysList, datesContainer);

  return element;
}

calendarTable(2020, 1, calendar);
