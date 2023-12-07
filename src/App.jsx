import "./App.css";
import Calendar from "./components/Calendar";

const CALENDAR_YEAR = 2023;

function App() {
  return (
    <div className="container">
      <Calendar calendarYear={CALENDAR_YEAR} />
    </div>
  );
}

export default App;
