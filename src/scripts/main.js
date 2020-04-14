'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const date = new Date(year, month - 1);
  let weekDay = date.getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  let daysCount = 1;
  const table = document.createElement('table');
  let week = '';
  let monthStr = '';
  const thead = `<thead>
                <tr>
                <td>ПН</td>
                <td>ВТ</td>
                <td>СР</td>
                <td>ЧТ</td>
                <td>ПТ</td>
                <td>СБ</td>
                <td>ВС</td>
                </tr>
                </thead>`;

  for (let weekCount = 1; weekCount < 6; weekCount++) {
    for (let i = 1; i < 8; i++) {
      if (weekDay > i || daysCount > daysInMonth) {
        week += `<td></td>`;
      } else {
        week += `<td>${daysCount}</td>`;
        daysCount++;
      };
    };
    weekDay = 1;
    monthStr += `<tr>${week}</tr>`;
    week = '';
  };

  table.innerHTML = `${thead}<tbody>${monthStr}</tbody>`;
  table.children[0].style.color = 'white';
  table.children[0].style.backgroundColor = 'red';
  table.children[1].style.color = 'teal';
  table.children[1].style.fontSize = '24px';
  element.append(table);
}

calendarTable(2019, 10, calendar);
