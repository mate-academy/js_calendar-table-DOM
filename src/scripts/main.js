'use strict';

const calendar = document.querySelector('#calendar');

const currentTime = new Date();
const monthNow = currentTime.getMonth() + 1;
const yearNow = currentTime.getFullYear();

function createSelector(startYear, endYear, currentYear, currentMonth) {
  const select = document.createElement('section');
  const monthes = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const fulOptionYear = () => {
    let htmlOptions = '';

    for (let i = startYear; i <= endYear; i++) {
      htmlOptions = `${htmlOptions}<option value="${i}">${i}</option>`;
    }

    return htmlOptions;
  };

  const fulOptionMonth = () => {
    const htmlMonthes = monthes.reduce((acc, month, idx) => {
      return acc + `<option value="${idx + 1}">${month}</option>`;
    }, '');

    return htmlMonthes;
  };

  select.setAttribute('id', 'selector');

  select.innerHTML = `
     <form action="#">
       <select id = "year" name = "year">
          <option disabled>Выберите год</option>
          ${fulOptionYear()}
        </select>
        <select id = "month" name = "year">
          <option disabled>Выберите месяц</option>
           ${fulOptionMonth()}
         </select>
         <button id="submit" type="button">Go to Date</button>
      </form>
  `;

  Array.from(select.querySelectorAll(`option`))
    .find(option => +option.value === currentYear)
    .setAttribute('selected', 'selected');

  Array.from(select.querySelectorAll(`option`))
    .find(option => +option.value === currentMonth)
    .setAttribute('selected', 'selected');

  document.body.prepend(select);
}

createSelector(1990, 2030, yearNow, monthNow);

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
    const dateThisMonth = new Date(y, m - 1, 1);
    const dateNextMonth = m === 12
      ? new Date(y + 1, 0, 1)
      : new Date(y, m, 1);

    return Math.round((dateNextMonth - dateThisMonth) / 1000 / 3600 / 24);
  };
  const amountDays = getDaysInMonth(year, month);
  const amountDaysCel = amountDays + daysTitle
    .indexOf(startDay) > 35 ? 42 : 35;
  const currentMonth = [...Array(amountDays).keys()];
  const clearDayStart = () => {
    const clearArr = [];

    while (clearArr.length <= daysTitle.indexOf(startDay) - 1) {
      clearArr.push('');
    }

    return clearArr;
  };
  const clearDayEnd = () => {
    const clearArr = [];

    while (clearArr.length <= amountDaysCel
      - daysTitle.indexOf(startDay) - 1
      - currentMonth.length) {
      clearArr.push('');
    }

    return clearArr;
  };
  const days = [
    ...clearDayStart(),
    ...currentMonth,
    ...clearDayEnd(),
  ];

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

calendarTable(
  Number(yearNow),
  Number(monthNow),
  calendar
);

const button = document.getElementById('submit');
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
