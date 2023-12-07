/* eslint-disable react/prop-types */
import { isDateWeekend } from "../../utils/days";
import "./styles.css";

export default function CardDay({ children, date }) {
  const backgroundColor = isDateWeekend(date) ? "gray" : "white";
  return (
    <div className="card-day" style={{ backgroundColor }}>
      {children}
    </div>
  );
}
