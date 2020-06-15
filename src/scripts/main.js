'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const date = new Date(year, month - 1);
  // const listOfDays = [];
  const numberOfDays = new Date(year, month, 0).getDate();
  const firstDay = (date.getDay() || 7) - 1;

  const days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

  const createEl = (tagName, wrapper) => {
    const inner = document.createElement(tagName);

    wrapper.append(inner);

    return inner;
  };

  const table = createEl('table', element);
  const tHead = createEl('thead', table);
  const tBody = createEl('tbody', table);

  const headRow = createEl('tr', tHead);

  days.forEach(dayWeek => {
    const daysWeek = createEl('th', headRow).textContent = dayWeek;

    return daysWeek;
  });

  let counterOfDays = 1;

  while (counterOfDays < numberOfDays) {
    const row = createEl('tr', tBody);

    for (let i = 0; i < 7; i++) {
      const cell = createEl('td', row);

      if ((i < firstDay && counterOfDays === 1)
        || counterOfDays > numberOfDays) {
        continue;
      }

      cell.textContent = counterOfDays;

      counterOfDays++;
    }
  }

  // for (let i = 0; i < days[firstDay] - 1; i++) {
  //   listOfDays.push('');
  // }

  // for (let i = 1; i <= numberOfDays; i++) {
  //   listOfDays.push(i);
  // }

  // for (let i = 0; i <= 35 - listOfDays.length; i++) {
  //   listOfDays.push('');
  // }

  // element.innerHTML = `
  //   <table>
  //     <tr>
  //       <th>пн</th>
  //       <th>вт</th>
  //       <th>ср</th>
  //       <th>чт</th>
  //       <th>пт</th>
  //       <th>сб</th>
  //       <th>вс</th>
  //     </tr>
  //   </table>
  // `;

  // const tbody = document.querySelector('tbody');

  // for (let i = 0; i < 5; i++) {
  //   const tr = document.createElement('tr');

  //   tr.innerHTML = `
  //       <td>${listOfDays[counter]}</td>
  //       <td>${listOfDays[counter + 1]}</td>
  //       <td>${listOfDays[counter + 2]}</td>
  //       <td>${listOfDays[counter + 3]}</td>
  //       <td>${listOfDays[counter + 4]}</td>
  //       <td>${listOfDays[counter + 5]}</td>
  //       <td>${listOfDays[counter + 6]}</td>
  //     `;

  //   counter += 7;

  //   tbody.append(tr);
  // }

  // return element.innerHTML;
}

calendarTable(2019, 10, calendar);
