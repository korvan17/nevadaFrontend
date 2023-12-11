"use client";
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useEffect, useState } from "react";

const data = [
  { id: 1, date: "2023-11-21", name: "cat" },
  { id: 2, date: "2023-11-22", name: "dog" },
  { id: 3, date: "2023-11-22", name: "frog" },
];

export default function Calendar() {
  const [date, setDate] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Log the formatted date when the date changes
    if (date) {
      console.log(date.format("YYYY-MM-DD")); // Adjust the format as needed

      // Filter the data array based on the selected date
      const filteredArray = data.filter(
        (item) => item.date === date.format("YYYY-MM-DD")
      );
      setFilteredData(filteredArray);
    }
  }, [date]);
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <DatePicker value={date} onChange={(newDate) => setDate(newDate)} /> */}

        <DateCalendar
          // showDaysOutsideCurrentMonth
          // fixedWeekNumber={6}
          value={date}
          onChange={(newDate) => setDate(newDate)}
          style={{
            width: "306px",
            height: "auto",
            // background: "#b7c6d2",
            borderRadius: "8px",
            border: "1px solid #C0C0C0",
          }}
        />
      </LocalizationProvider>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
