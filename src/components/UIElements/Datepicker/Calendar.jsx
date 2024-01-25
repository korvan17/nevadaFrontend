// components/Calendar.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      style={{
        width: "306px",
        height: "auto",

        borderRadius: "8px",
        border: "1px solid #C0C0C0",
      }}
      inline
    />
  );
};

export default Calendar;
