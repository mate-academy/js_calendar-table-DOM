'use strict';

const calendar = document.querySelector('#calendar');

const calendarTable = (year, month, element) => {
  const date = new Date(year, month - 1);
  let table = '';
  let head = '';
  let body = '';
  const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  let day;

  for (const weekday of week) {
    head += `<th>${weekday}</th>`;
  }

  for (let i = 0; i < date.getDay() - 1; i++) {
    body += `<td></td>`;
  }

  while (date.getMonth() === month - 1) {
    body += `<td>${date.getDate()}</td>`;

    if (date.getDay() % 7 === 0) {
      body += `<tr></tr>`;
    }

    day = date.getDay();
    date.setDate(date.getDate() + 1);
  }

  if (day !== 0) {
    for (let i = date.getDay(); i <= 7; i++) {
      body += `<td></td>`;
    }
  }

  table = `<thead><tr>${head}</tr></thead><tbody><tr>${body}</tr></tbody>`;
  element.innerHTML = `<table>${table}</table>`;
};

calendarTable(2019, 10, calendar);
