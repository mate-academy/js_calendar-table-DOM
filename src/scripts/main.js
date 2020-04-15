'use strict';

const calendar = document.querySelector('#calendar');

function calendarTable(year, month, element) {
  const tableHead = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд']
    .map(day => `<th>${day}</th>`).join('');
  const daysInMonth = new Date(year, month, 0).getDate();
  const daysInPrevMonth = new Date(year, month - 1, 0).getDay();
  const calendarContent = []; // масив для збору данних
  // (к-ть днів для відображення з минулого місяця + к-ть днів з цього місяця)
  let partOfPrevMonth = 0;

  while (partOfPrevMonth < daysInPrevMonth) {
    partOfPrevMonth++;
    calendarContent.push(`<td></td>`);
  } // визначаємо кількість порожніх клітинок
  // (останніх днів з попереднього місяця) на початку календаря

  let numberOfDay = 0;

  while (numberOfDay < daysInMonth) {
    numberOfDay++;
    calendarContent.push(`<td>${numberOfDay}</td>`);
  } // додаємо дані (дні в цьому місяці) для відображення в календар

  const tableBody = []; // масив для відображення даних в календарі по тижнях
  // (днів з попереднього місяця + поточний місяць + наступний місяць)

  for (let daysInWeek = 0;
    daysInWeek < calendarContent.length + 1;
    daysInWeek++) {
    if (daysInWeek % 7 === 0) {
      tableBody.push(`</tr><tr>`);
    }; // розділяємо зібрані дані для відображення по тижнях

    if (daysInWeek === calendarContent.length) {
      let i = calendarContent.length;

      while (i % 7 !== 0) {
        tableBody.push(`<td></td>`);
        i++;
      } // якщо дані закінчились, а відображення останнього тижня не заповнено
    } // доповнюємо порожніми клітинками (тобто це частина наступного місяця)

    tableBody.push(calendarContent[daysInWeek]);
  }

  element.innerHTML = `
    <table>
      <tr>${tableHead}</tr>
      <tr>${tableBody.join('')}</tr>
    </table>`;
}

calendarTable(2019, 10, calendar);
