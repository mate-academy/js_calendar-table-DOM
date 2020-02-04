'use strict';

const DAYS = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const mon = month - 1;
  const day = new Date(year, mon);
  let header = '';

  for (const item of DAYS) {
    header += `<th>${item}</th>`;
  }

  let table = `<table><tr>${header}</tr><tr>`;

  for (let i = 0; i < getMyDay(day); i++) {
    table += '<td></td>';
  }

  while (day.getMonth() === mon) {
    table += '<td>' + day.getDate() + '</td>';

    if (getMyDay(day) / 6 === 1) {
      table += '</tr><tr>';
    }

    day.setDate(day.getDate() + 1);
  }

  if (getMyDay(day) !== 0) {
    for (let i = getMyDay(day); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';

  element.innerHTML = table;
}

function getMyDay(date) {
  let day = date.getDay() - 1;

  if (day === -1) {
    day = 6;
  }

  return day;
}

calendarTable(2020, 1, calendar);
