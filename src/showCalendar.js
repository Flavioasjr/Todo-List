import { format, compareAsc } from 'date-fns';

export default function showCalendar() {
  const monthYear = document.querySelector('.month-year');
  const calendarNumber = document.querySelectorAll('.calendar__number');
  const dateMonthYear = format(new Date(), 'MMM yyyy');
  const dateDay = Number(format(new Date(), 'i'));
  let numberDay = 1;
  // calendarNumber[dateDay - 1].textContent = 1;

  for (let i = (dateDay - 1); i < calendarNumber.length; i += 1) {
    calendarNumber[i].textContent = numberDay;
    numberDay += 1;
  }

  monthYear.textContent = dateMonthYear;
}
