'use strict';

const calendar = document.querySelector('#calendar');
const calendarBody = document.querySelector('#calendarBody');

function calendarTable(year, month, element) {
  const date = new Date(year, month);
  const nextDate = new Date(year, month + 1);

  let startDay = date.getDay() ? date.getDay() : 7;

  nextDate.setDate(-0);

  const days = nextDate.getDate();
  let tr = document.createElement('tr');

  for (let i = 1; i <= days; i++) {
    for (let j = 1; j < startDay;) {
      tr.appendChild(document.createElement('td'));
      startDay--;
    }

    const td = document.createElement('td');

    td.innerText = i;
    tr.appendChild(td);

    if (tr.children.length === 7 || i === days) {
      calendarBody.appendChild(tr);
      tr = document.createElement('tr');
    }
  }
}

calendarTable(2019, 10, calendar);
