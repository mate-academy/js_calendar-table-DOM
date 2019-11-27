'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const date = new Date(year, month - 1);
  let table = `<thead><tr>${week
    .map(day => `<th>${day}</th>`)
    .join('')}</tr></thead><tbody><tr>`;

  for (let i = 0; i < getDay(date); i++) {
    table += `<td></td>`;
  }

  while (date.getMonth() === month - 1) {
    table += `<td> ${date.getDate()} </td>`;

    if (getDay(date) % 7 === 6) {
      table += `</tr><tr>`;
    }

    date.setDate(date.getDate() + 1);
  }

  if (getDay(date) !== 0) {
    for (let i = getDay(date); i < 7; i++) {
      table += `<td></td>`;
    }
  }

  element.innerHTML = `<table>${table}</tr></tbody></table>`;
}

function getDay(date) {
  let day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day - 1;
}

calendarTable(2019, 11, calendar);
