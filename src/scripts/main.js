'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  element.insertAdjacentHTML('beforebegin',
    `<table>
            <tr>
              <th>пн</th>
              <th>вт</th>
              <th>ср</th>
              <th>чт</th>
              <th>пт</th>
              <th>сб</th>
              <th>вс</th>
            </tr>
            
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>`
  );

  const date = new Date(year, month);
  const monthFirstDay = date.getDay() === 0 ? 7 : date.getDay();
  const monthDays = new Date(year, month === 11 ? 0 : month + 1, 0).getDate();
  const tdList = document.querySelectorAll('td');

  for (let i = 1; i <= monthDays; i++) {
    tdList[(monthFirstDay - 1) + (i - 1)].textContent = `${i}`;
  }
}

calendarTable(2019, 10, calendar);
