/* eslint-disable react/prop-types */

import { getCalendar } from "../../utils/days";
import CardDay from "../CardDay";
import Day from "../Day";
import "./styles.css";

const Calendar = ({ calendarYear }) => {
  const calendar = getCalendar(calendarYear);
  return (
    <>
      <h1>Calendar {calendarYear}</h1>
      <div className="calendar-container">
        {calendar.map((date) => (
          <CardDay key={date.dayOfYear} date={date}>
            <Day date={date} />
          </CardDay>
        ))}
      </div>
    </>
  );
};

export default Calendar;
