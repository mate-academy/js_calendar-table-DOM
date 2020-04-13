'use strict';

const calendar = document.querySelector('#calendar');

function cellCreate(td, tr, className, counter = '') {
  td.classList.add(className);
  td.innerHTML = counter;
  tr.appendChild(td);
}

function calendarTable(year, month, element) {
  let validMonth = String(month);

  validMonth = validMonth.padStart(2, 0);

  const daysNumber = new Date(year, month, 0).getDate();
  let fistDayOfWeek = new Date(`${year}-${validMonth}-01`).getDay();

  if (fistDayOfWeek === 0) {
    fistDayOfWeek = 7;
  }

  const weekdays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const calendarCellClass = 'calendar__cell';
  const calenadarWrapper = document.createElement('table');

  calendar.innerHTML = '';
  calendar.prepend(calenadarWrapper);

  calenadarWrapper.classList.add('calendar__wrapper');

  const calendarHead = document.createElement('tr');

  calendarHead.classList.add('calendar__head');

  let calendarCell;

  for (let i = 0; i < weekdays.length; i++) {
    calendarCell = document.createElement('th');

    cellCreate(calendarCell, calendarHead, calendarCellClass, weekdays[i]);
  }

  let calendarLine = document.createElement('tr');

  let emptyCell = fistDayOfWeek - 1;

  for (let i = 1; i <= emptyCell; i++) {
    calendarCell = document.createElement('td');
    cellCreate(calendarCell, calendarLine, calendarCellClass);
  }

  const firstWeek = 7 - fistDayOfWeek + 1;

  for (let i = 1; i <= firstWeek; i++) {
    calendarCell = document.createElement('td');

    cellCreate(calendarCell, calendarLine, calendarCellClass, i);
  }
  calenadarWrapper.appendChild(calendarHead);
  calenadarWrapper.appendChild(calendarLine);

  const fullWeek = Math.floor((daysNumber - firstWeek) / 7);
  let start = firstWeek + 1;
  let end;
  let fullWeekLine;

  for (let i = 1; i <= fullWeek; i++) {
    fullWeekLine = document.createElement('tr');
    end = start + 7;

    for (let j = start; j < end; j++) {
      calendarCell = document.createElement('td');

      cellCreate(calendarCell, fullWeekLine, calendarCellClass, j);
    }

    start = end;
    calenadarWrapper.appendChild(fullWeekLine);
  }

  const restDays = daysNumber - fullWeek * 7 - firstWeek;

  if (restDays > 0) {
    calendarLine = document.createElement('tr');

    for (let i = daysNumber - restDays + 1; i <= daysNumber; i++) {
      calendarCell = document.createElement('td');
      cellCreate(calendarCell, calendarLine, calendarCellClass, i);
    }
    calenadarWrapper.appendChild(calendarLine);

    emptyCell = 7 - restDays;

    for (let i = 1; i <= emptyCell; i++) {
      calendarCell = document.createElement('td');
      cellCreate(calendarCell, calendarLine, calendarCellClass);
    }
  }
}

calendarTable(2019, 10, calendar);
