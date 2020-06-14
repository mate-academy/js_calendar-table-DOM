'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const date = new Date(year, month - 1);
  const listOfDays = [];
  let counter = 0;

  function getFirstDay() {
    const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    return [days[date.getDay()], date.getDay()];
  }

  const numberOfDays = 32 - new Date(year, month - 1, 32).getDate();
  const firstDay = getFirstDay(date);

  for (let i = 0; i < firstDay[1]; i++) {
    listOfDays.push('');
  }

  for (let i = 1; i <= numberOfDays; i++) {
    listOfDays.push(i);
  }

  for (let i = 0; i <= 35 - listOfDays.length; i++) {
    listOfDays.push('');
  }

  element.innerHTML = `
    <table>
      <tr>
        <th>пн</th>
        <th>вт</th>
        <th>ср</th>
        <th>чт</th>
        <th>пт</th>
        <th>сб</th>
        <th>вс</th>
      </tr>
    </table>
  `;

  const tbody = document.querySelector('tbody');

  for (let i = 0; i < 5; i++) {
    const tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${listOfDays[counter]}</td>
        <td>${listOfDays[counter + 1]}</td>
        <td>${listOfDays[counter + 2]}</td>
        <td>${listOfDays[counter + 3]}</td>
        <td>${listOfDays[counter + 4]}</td>
        <td>${listOfDays[counter + 5]}</td>
        <td>${listOfDays[counter + 6]}</td>
      `;

    counter += 7;

    tbody.append(tr);
  }

  return element.innerHTML;
}

calendarTable(2019, 10, calendar);
