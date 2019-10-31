'use strict';

const calendar = document.querySelector('#calendar');

function createCalendar(year, month, element) {
  Date.prototype.daysInMonth = function() {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
  };

  const date = new Date(year, month - 1);
  let firstDay = new Date(`${year}-${month}-01`).getDay();
  firstDay ? firstDay = +firstDay : firstDay = 7; //Костыль :D
  const quantityDays = new Date(year, month -1).daysInMonth();
  const calendarHeaderArray = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  let innerDiv;
  let daysIndex;
  daysIndex = firstDay < 6 ? 35 : 42;
  
  for (let day of calendarHeaderArray) {
    innerDiv = document.createElement('div');
    element.append(innerDiv);
    innerDiv.textContent = day;
    innerDiv.className = 'calendar__header';
  }

  for (let i = 1; i <= daysIndex; i++) {
    innerDiv = innerDiv = document.createElement('div');
    element.append(innerDiv);
    innerDiv.className = 'calendar__day';

    if (firstDay > i || i > quantityDays + (firstDay - 1)) {
      innerDiv.textContent = '';
      innerDiv.className = 'calendar__day calendar__day_empty';
    } else {
      innerDiv.textContent = (i - firstDay) + 1;
      innerDiv.className = 'calendar__day';
    }
  }
}

createCalendar(2019, 10, calendar);