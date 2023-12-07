export const holidays = [
  {
    name: "New Year",
    date: "1/1/2023",
  },
  {
    name: "Good Friday",
    date: "4/7/2023",
  },
  {
    name: "Easter Monday",
    date: "4/10/2023",
  },
  {
    name: "Victoria Day",
    date: "5/22/2023",
  },
  {
    name: "Saint-Jean-Baptiste Day",
    date: "6/24/2023",
  },
  {
    name: "Canada Day",
    date: "7/1/2023",
  },
  {
    name: "Civic Holiday",
    date: "8/7/2023",
  },
  {
    name: "Labour Day",
    date: "9/4/2023",
  },
  {
    name: "National Day for Truth and Reconciliation",
    date: "9/30/2023",
  },
  {
    name: "Thanksgiving Day",
    date: "10/9/2023",
  },
  {
    name: "Remembrance Day",
    date: "11/11/2023",
  },
  {
    name: "Christmas Day",
    date: "12/25/2023",
  },
  {
    name: "Boxing Day",
    date: "12/26/2023",
  },
];

export function getCalendar(year) {
  const firstDay = new Date(year, 0, 1); // Jan 1, {year}
  const lastDay = new Date(year, 11, 31); // Dec 31, {year}

  let calendar = [];
  let currentDate = firstDay;

  let countDays = 0;
  while (currentDate <= lastDay) {
    countDays++;

    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    let year = currentDate.getFullYear();

    calendar.push({
      day,
      month,
      year,
      date: currentDate,
      dayOfYear: countDays,
      fullDate: month + "/" + day + "/" + year,
      weekDay: currentDate.getDay(),
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return calendar;
}

export function getHolidayName(date) {
  const holiday = holidays.find((holiday) => holiday.date === date.fullDate);
  return holiday.name;
}

export function isDateHoliday(date) {
  const isHoliday = holidays.find((holiday) => holiday.date === date.fullDate);
  return isHoliday;
}

export function isDateWeekend(date) {
  return date.weekDay === 0 || date.weekDay == 6;
}
