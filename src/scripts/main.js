'use strict';

const calendar = document.querySelector('#calendar');

const getLocalDay = date => {
  let day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
};

function calendarTable(year, month, element) {
  const monthLength = new Date(year, month, 0).getDate();
  const monthStartDay = getLocalDay(new Date(year, month - 1));
  const monthEndDay = getLocalDay(new Date(year, month - 1, monthLength));
  const daysArr = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

  let htmlCode = `<thead><tr>${daysArr
    .map(day => `<th>${day}</th>`).join('')}</tr></thead><tbody><tr>`;

  for (let i = 1; i < monthStartDay; i++) {
    htmlCode += `<td></td>`;
  }

  for (let i = 1; i <= monthLength; i++) {
    if ((i + monthStartDay - 1) % 7 === 0) {
      htmlCode += `<td>${i}</td></tr><tr>`;
    } else {
      htmlCode += `<td>${i}</td>`;
    }
  }

  for (let i = 1; i <= 7 - monthEndDay; i++) {
    htmlCode += `<td></td>`;
  }

  element.innerHTML = `<table>${htmlCode}</tr></tbody></table>`;
}

calendarTable(2019, 11, calendar);
