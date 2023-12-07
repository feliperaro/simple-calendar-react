/* eslint-disable react/prop-types */
import { getHolidayName, isDateHoliday } from "../../utils/days";

export default function Day({ date }) {
  const isHoliday = isDateHoliday(date);

  return (
    <>
      {date.day} {isHoliday && getHolidayName(date)}
    </>
  );
}
