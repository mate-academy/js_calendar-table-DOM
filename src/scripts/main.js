'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  element.innerHTML = '';

  const table = document.createElement('table');

  element.insertAdjacentElement('beforeend', table);

  const daysTitle = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const startDay = new Date(year, month - 1, 1).toLocaleString('ru', {
    weekday: 'short',
  });
  // нумерация месяцев начинается с 0 - январь
  const getDaysInMonth = (y, m) => {
    const date1 = new Date(y, m - 1, 1);
    const date2 = m === 12
      ? new Date(y + 1, 0, 1)
      : new Date(y, m, 1);

    return Math.round((date2 - date1) / 1000 / 3600 / 24);
  };
  const amounDays = getDaysInMonth(year, month);
  const amounDaysCel = amounDays + daysTitle.indexOf(startDay)
  > 35
    ? 42
    : 35;
  const currentMonth = [...Array(amounDays).keys()];
  const clearDayStart = () => {
    const clearArr = [];

    while (clearArr.length <= daysTitle.indexOf(startDay) - 1) {
      clearArr.push('');
    }

    return clearArr;
  };
  const clearDayEnd = () => {
    const clearArr = [];

    while (clearArr.length <= amounDaysCel
    - daysTitle.indexOf(startDay) - 1
    - currentMonth.length) {
      clearArr.push('');
    }

    return clearArr;
  };
  const days = [
    ...clearDayStart(),
    ...currentMonth,
    ...clearDayEnd()];

  const createHeader = (root, arr) => {
    const tr = document.createElement('tr');

    root.insertAdjacentElement('beforeend', tr);

    arr.forEach(day => {
      const th = document.createElement('th');

      th.innerText = day;
      tr.insertAdjacentElement('beforeend', th);
    });
  };

  const createDays = (root, arr) => {
    const tr = document.createElement('tr');

    root.insertAdjacentElement('beforeend', tr);

    arr.forEach(day => {
      const td = document.createElement('td');

      td.innerText = day !== '' ? day + 1 : '';
      tr.insertAdjacentElement('beforeend', td);
    });
  };

  createHeader(table, daysTitle);
  createDays(table, days);
}

const button = document.getElementById('submit');
const currentTime = new Date();
const monthNow = currentTime.getMonth() + 1;
const yearNow = currentTime.getFullYear();

calendarTable(Number(yearNow),
  Number(monthNow),
  calendar);

const handleSearch = () => {
  const selectorYear = document.getElementById('year');
  const inputYear = selectorYear[selectorYear.selectedIndex].value;
  const selectorMonth = document.getElementById('month');
  const inputMonth = selectorMonth[selectorMonth.selectedIndex].value;

  calendarTable(Number(inputYear),
    Number(inputMonth),
    calendar);
};

button.addEventListener('click', handleSearch);
