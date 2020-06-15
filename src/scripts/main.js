'use strict';

const calendar = document.querySelector('#calendar');

const calendarTable = (year, month, element) => {
  const date = new Date(year, month - 1);
  let head = '';
  let body = '';
  const WEEK_DAYS = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  let day = date.getDay();

  for (const weekday of WEEK_DAYS) {
    head += `<th>${weekday}</th>`;
  }

  if (day === 0) {
    day = 7;
  }

  for (let i = 0; i < day - 1; i++) {
    body += `<td></td>`;
  }

  while (date.getMonth() === month - 1) {
    body += `<td>${date.getDate()}</td>`;

    if (date.getDay() % 7 === 0) {
      body += `</tr><tr>`;
    }

    day = date.getDay();
    date.setDate(date.getDate() + 1);
  }

  if (day !== 0) {
    for (let i = date.getDay(); i <= 7; i++) {
      body += `<td></td>`;
    }
  }

  head = `<thead><tr>${head}</tr></thead>`;
  body = `<tbody><tr>${body}</tr></tbody>`;

  const table = head + body;

  element.innerHTML = `<table>${table}</table>`;
};

calendarTable(1993, 9, calendar);
