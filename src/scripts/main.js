'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  let validMonth = String(month);

  if (validMonth.length < 2) {
    validMonth = `0${validMonth}`;
  }

  const daysNumber = new Date(year, month, 0).getDate();
  let fistDayOfWeak = new Date(`${year}-${validMonth}-01`).getDay();

  if (fistDayOfWeak === 0) {
    fistDayOfWeak = 7;
  }

  const weekdays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const calenadarWrapper = document.createElement('table');

  calenadarWrapper.classList.add('calendar__wrapper');

  const calendarHead = document.createElement('tr');

  calendarHead.classList.add('calendar__head');

  let calendarCell;

  for (let i = 0; i < weekdays.length; i++) {
    calendarCell = document.createElement('th');

    calendarCell.classList.add('calendar__cell');
    calendarCell.innerHTML = weekdays[i];
    calendarHead.appendChild(calendarCell);
  }

  let calendarLine = document.createElement('tr');

  let pureCell = fistDayOfWeak - 1;

  for (let i = 1; i <= pureCell; i++) {
    calendarCell = document.createElement('td');
    calendarCell.classList.add('calendar__cell');
    calendarLine.appendChild(calendarCell);
  }

  const firstLineCells = 7 - fistDayOfWeak + 1;

  for (let i = 1; i <= firstLineCells; i++) {
    calendarCell = document.createElement('td');

    calendarCell.classList.add('calendar__cell');
    calendarCell.innerHTML = i;
    calendarLine.appendChild(calendarCell);
  }
  calenadarWrapper.appendChild(calendarHead);
  calenadarWrapper.appendChild(calendarLine);

  const ceilLines = Math.floor((daysNumber - firstLineCells) / 7);
  let begin = firstLineCells + 1;
  let end;
  let calendarCeilLine;

  for (let i = 1; i <= ceilLines; i++) {
    calendarCeilLine = document.createElement('tr');
    end = begin + 7;

    for (let j = begin; j < end; j++) {
      calendarCell = document.createElement('td');
      calendarCell.classList.add('calendar__cell');
      calendarCell.innerHTML = j;
      calendarCeilLine.appendChild(calendarCell);
    }

    begin = end;
    calenadarWrapper.appendChild(calendarCeilLine);
  }

  const restDays = daysNumber - ceilLines * 7 - firstLineCells;

  if (restDays > 0) {
    calendarLine = document.createElement('tr');

    for (let i = daysNumber - restDays + 1; i <= daysNumber; i++) {
      calendarCell = document.createElement('td');
      calendarCell.classList.add('calendar__cell');
      calendarCell.innerHTML = i;
      calendarLine.appendChild(calendarCell);
    }
    calenadarWrapper.appendChild(calendarLine);

    pureCell = 7 - restDays;

    for (let i = 1; i <= pureCell; i++) {
      calendarCell = document.createElement('td');
      calendarCell.classList.add('calendar__cell');
      calendarLine.appendChild(calendarCell);
    }
  }

  calendar.appendChild(calenadarWrapper);

  return element;
}

calendarTable(2019, 11, calendar);
