"use client";
import { useState } from "react";

export default function Home() {
  const today = () => {
    return new Date();
  };
  const day_of_week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month_of_year = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Auguest",
    "September",
    "October",
    "November",
    "December",
  ];
  const full_day_of_month = [
    31,
    28 + (today().getFullYear() % 4 === 0 ? 1 : 0),
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  const getFirstDayOfMonth = (month: any, year: any) => {
    return new Date(year, month, 1).getDay();
  };
  const [year, setyear] = useState(today().getFullYear()); // [2021, 2022, 2023, 2024, 2025
  const [month, setmonth] = useState(today().getMonth() + 1);
  const [monthofyear, setMonthofyear] = useState(month_of_year[month - 1]);
  const [fulldate, setfulldate] = useState(full_day_of_month[month - 1]);
  const [startDate, setStartDate] = useState(today());
  const [date, setdate] = useState(today().getDate());
  const [selectedDate, setSelectedDate] = useState(date);

  const go_left = (month: any) => {
    if (month !== 1) {
      setmonth(month - 1);
      setMonthofyear(month_of_year[month - 2]);
      setfulldate(full_day_of_month[month - 1]);
    } else {
      setmonth(12);
      setMonthofyear(month_of_year[11]);
      setfulldate(full_day_of_month[11]);
      setyear(year - 1);
    }
  };

  const go_right = (month: any) => {
    if (month !== 12) {
      setmonth(month + 1);
      setMonthofyear(month_of_year[month]);
      setfulldate(full_day_of_month[month - 1]);
    } else {
      setmonth(1);
      setMonthofyear(month_of_year[0]);
      setfulldate(full_day_of_month[0]);
      setyear(year + 1);
    }
  };
  const select_date = (date: any) => {
    setSelectedDate(date.innerText);
    console.log("date", date.innerText, "selected", selectedDate);
  };
  const set_now = () => {
    setmonth(today().getMonth() + 1);
    setMonthofyear(month_of_year[today().getMonth()]);
    setfulldate(full_day_of_month[today().getMonth()]);
    setyear(today().getFullYear());
    setdate(today().getDate());
    setSelectedDate(today().getDate());
  };
  // console.log(year, month, monthofyear, date, selectedDate);
  // console.log(day_of_week[getFirstDayOfMonth(month - 1, year)]);
  const render_calendar = () => {
    let calendar = [];
    let day = 1;
    let first_day = getFirstDayOfMonth(month - 1, year);
    let last_day = full_day_of_month[month - 1];
    console.log("selected", selectedDate);
    for (let i = 0; i < 6; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < first_day) {
          week.push(
            <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative overflow-hidden rounded-[40px]" />
          );
        } else if (day > last_day) {
          if (i !== 5) {
            week.push(
              <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative overflow-hidden rounded-[40px]" />
            );
          } else if (j < 7) {
            week.push(
              <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative overflow-hidden rounded-[40px]" />
            );
          } else {
            break;
          }
        } else {
          week.push(
            <div
              key={day}
              onClick={e => {
                select_date(e.target);
              }}
              className={`text-center hover:cursor-pointer flex-grow-0 flex-shrink-0 w-6 h-6 relative overflow-hidden rounded-[40px] 
            ${day == selectedDate ? "bg-[#d0bcff]" : "bg-white"}`}
            >
              <p
                className={` w-6 h-6 absolute left-0 top-[2px] text-sm font-medium text-center uppercase ${
                  day == selectedDate
                    ? "text-white rounded-full"
                    : "text-[#0f2552]"
                }`}
              >
                {day}
              </p>
            </div>
          );
          day++;
        }
      }
      calendar.push(
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative px-6 ">
          {week}
        </div>
      );
    }
    return calendar;
  };

  return (
    <div>
      <div className="text-center mt-5 justify-center items-center">
        <div
          className="w-[308px] h-[350px] relative overflow-hidden rounded-2xl bg-white m-auto mt-5"
          style={{ boxShadow: "#d0bcff 0px 3px 6px 0px" }}
        >
          <div className="flex justify-between items-center w-[308px] absolute left-0 top-6 px-6">
            <svg
              width={16}
              height={17}
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-4 h-4 relative hover:cursor-pointer"
              preserveAspectRatio="xMidYMid meet"
              onClick={() => {
                go_left(month);
              }}
            >
              <path
                d="M10.1831 4.675L6.35811 8.5L10.1831 12.325L8.99977 13.5L3.99977 8.5L8.99977 3.5L10.1831 4.675Z"
                fill="#848A95"
              />
            </svg>
            <p
              onClick={() => {
                set_now();
              }}
              className="hover:cursor-pointer flex-grow-0 flex-shrink-0 text-sm font-semibold text-center text-[#0f2552]"
            >
              {year} {month} ({monthofyear})
            </p>
            <svg
              width={16}
              height={17}
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-4 h-4 relative hover:cursor-pointer"
              preserveAspectRatio="xMidYMid meet"
              onClick={() => {
                go_right(month);
              }}
            >
              <path
                d="M5.81689 12.325L9.6419 8.5L5.8169 4.675L7.00023 3.5L12.0002 8.5L7.00023 13.5L5.81689 12.325Z"
                fill="#848A95"
              />
            </svg>
          </div>
          <svg
            width={251}
            height={1}
            viewBox="0 0 251 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-[28.1px] top-[60.1px]"
            preserveAspectRatio="xMidYMid meet"
          >
            <line
              y1="0.6"
              x2={251}
              y2="0.6"
              stroke="#E4E5E7"
              stroke-width="0.8"
            />
          </svg>
          <div className="flex justify-between items-start w-[308px] absolute left-0 top-[77px] px-6">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-8 relative gap-2.5 p-1">
              <p className="flex-grow w-6 text-[10px] font-medium text-center uppercase text-[#7e818c]">
                sun
              </p>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-8 relative gap-2.5 p-1">
              <p className="flex-grow w-6 text-[10px] font-medium text-center uppercase text-[#7e818c]">
                Mon
              </p>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-8 relative gap-2.5 p-1">
              <p className="flex-grow w-6 text-[10px] font-medium text-center uppercase text-[#7e818c]">
                tue
              </p>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-8 relative gap-2.5 p-1">
              <p className="flex-grow w-6 text-[10px] font-medium text-center uppercase text-[#7e818c]">
                wed
              </p>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-8 relative gap-2.5 p-1">
              <p className="flex-grow w-6 text-[10px] font-medium text-center uppercase text-[#7e818c]">
                thu
              </p>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-8 relative gap-2.5 p-1">
              <p className="flex-grow w-6 text-[10px] font-medium text-center uppercase text-[#7e818c]">
                fri
              </p>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-8 relative gap-2.5 p-1">
              <p className="flex-grow w-6 text-[10px] font-medium text-center uppercase text-[#7e818c]">
                sat
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start w-[308px] absolute left-0 top-[113px] gap-4">
            {render_calendar()}
            {/* <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 relative px-6">
              <div className="flex-grow-0 flex-shrink-0 w-6 h-6 relative overflow-hidden rounded-[40px] bg-[#1f95af]">
                <p className="w-6 h-6 absolute left-0 top-0 text-sm font-medium text-center uppercase text-[#fdfdfd]">
                  1
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
