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
  const datesArr = Array.from(Array(monthLength).keys()).map(date => date + 1);

  element.innerHTML = `
  <table>
    <thead>
      <tr>    
     ${daysArr.map(day => `<th>${day}</th>`).join('')}      
      </tr>
    </thead>
    <tbody>
      <tr>      
     ${Array(monthStartDay - 1).fill('').map(date => `<td></td>`).join('')}
     ${datesArr
    .map(date => (date + monthStartDay - 1) % 7 === 0
      ? `<td>${date}</td></tr><tr>`
      : `<td>${date}</td>`)
    .join('')}
     ${Array(7 - monthEndDay).fill('').map(date => `<td></td>`).join('')}     
      </tr>
    </tbody>
  </table>`;
}

calendarTable(2019, 12, calendar);
