'use strict';

const WEEK_DAYS = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const WEEK_LENGTH = 7;
const calendar = document.querySelector('#calendar');
const options = {
  year: 'numeric', month: 'long',
};

function calendarTable(year, month, element) {
  const date = new Date(year, month - 1);
  const numDaysInMonth = new Date(year, month, 0).getDate();
  const starWeekDay = date.getDay() || 7;
  const endWeekDay = new Date(year, month).getDay();
  const strDate = date.toLocaleDateString('en-US', options);
  const heading = `<caption>${strDate}</caption>`;
  let head = '';
  let body = '';

  WEEK_DAYS.forEach(weekday => {
    head += `<th>${weekday}</th>`;
  });

  for (let i = 0; i < starWeekDay - 1; i++) {
    body += `<td></td>`;
  }

  for (let currDay = 0; currDay < numDaysInMonth; currDay++) {
    body += `<td>${currDay + 1}</td>`;

    if ((currDay + starWeekDay) % 7 === 0) {
      body += `</tr><tr>`;
    }
  }

  for (let i = endWeekDay; i <= WEEK_LENGTH; i++) {
    body += `<td></td>`;
  }

  head = `<thead><tr>${head}</tr></thead>`;
  body = `<tbody><tr>${body}</tr></tbody>`;

  const table = heading + head + body;

  element.innerHTML = `<table>${table}</table>`;
}

calendarTable(2020, 8, calendar);
