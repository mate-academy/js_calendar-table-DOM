'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  let table = `<table><tr><th>пн</th><th>вт</th><th>ср</th>
                <th>чт</th><th>пт</th><th>сб</th><th>нд</th></tr>`;
  const day = new Date(year, month).getDay() || 7;
  const lastDay = new Date(year, month + 1, 0).getDate();
  const rows = Math.ceil((lastDay - day) / 7) + 1;

  for (let i = 0, d = 1; i < rows; i++) {
    let createTr = '<tr>';

    for (let j = 0; j < 7; j++) {
      let createTd = `<td>`;
      const numDays = i * 7 + j + 1;

      if ((numDays >= day) && (numDays <= lastDay + 1)) {
        createTd += d++;
      }
      createTd += `</td>`;
      createTr += createTd;
    }
    createTr += '</tr>';
    table += createTr;
  }

  element.innerHTML = table;
}

calendarTable(2020, 5, calendar);
