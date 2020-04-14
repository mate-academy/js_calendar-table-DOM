'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  // WRITE YOUR CODE HERE

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  element.append(table);
  table.append(thead);
  table.append(tbody);

  const trThead = `<tr>${`<th></th>`.repeat(7)}</tr>`;
  const trTbody = `<tr>${`<td></td>`.repeat(7)}</tr>`;

  thead.innerHTML = trThead;
  tbody.innerHTML = trTbody.repeat(5);

  const daysOfWeek = {
    0: 'пн',
    1: 'вт',
    2: 'ср',
    3: 'чт',
    4: 'пт',
    5: 'сб',
    6: 'вс',
  };

  const theadElements = thead.querySelectorAll('th');

  for (let i = 0; i < theadElements.length; i++) {
    theadElements[i].textContent = daysOfWeek[i];
  }

  const tbodyElements = tbody.querySelectorAll('tr');
  let day = 1;

  for (let i = 0; i < tbodyElements.length; i++) {
    const trElements = Array.from(tbodyElements[i].querySelectorAll('td'));
    let dayOfWeek;

    do {
      const date = new Date(year, month - 1, day);

      if (date.getMonth() !== month - 1) {
        return;
      }

      dayOfWeek = date.getDay();

      trElements.slice(dayOfWeek - 1)[0] // 0:вс - 6:сб => 0:пн - 6:вс
        .textContent = day;

      day += 1;
    } while (dayOfWeek > 0);
  }
}

calendarTable(2020, 4, calendar);
