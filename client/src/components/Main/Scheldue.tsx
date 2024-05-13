import React, { useState } from "react";

const daysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

const generateRandomSchedule = (totalDays: number) => {
  const schedule = [];
  for (let i = 1; i <= totalDays; i++) {
    const hasLesson = Math.random() < 0.5;
    const lessons = hasLesson ? generateRandomLessons() : [];
    schedule.push({ day: i, lessons });
  }
  return schedule;
};

const generateRandomLessons = () => {
  const numLessons = Math.floor(Math.random() * 3) + 1;
  const lessons = [];
  for (let i = 0; i < numLessons; i++) {
    const startTimeHour = Math.floor(Math.random() * 24);
    const startTimeMinute = Math.floor(Math.random() * 60);
    const endTimeHour = startTimeHour + Math.floor(Math.random() * 4) + 1;
    const endTimeMinute = Math.floor(Math.random() * 60);
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    lessons.push({
      subject,
      startTime: `${startTimeHour.toString().padStart(2, "0")}:${startTimeMinute
        .toString()
        .padStart(2, "0")}`,
      endTime: `${endTimeHour.toString().padStart(2, "0")}:${endTimeMinute
        .toString()
        .padStart(2, "0")}`,
    });
  }
  return lessons;
};

const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "History",
  "Literature",
  "Geography",
  "Computer Science",
];

const Schedule = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();

  const totalDays = daysInMonth(currentYear, currentMonth);

  const initialSchedule = generateRandomSchedule(totalDays);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [schedule, setSchedule] = useState(initialSchedule);
  const [monthName, setMonthName] = useState(monthNames[currentMonth]);

  return (
    <div className="h-full overflow-y-scroll lg:px-16 px-4 scrollbar-hidden">
      <h2 className="text-5xl font-bold mb-8 mt-4 text-gray-700 text-center">
        {monthName}
      </h2>
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-7 sm:grid-cols-4">
        {schedule.map((dayInfo, index) =>
          dayInfo.lessons.length > 0 ? (
            <div
              key={index}
              className={
                "p-4 border bg-blue-300 rounded-lg " +
                (currentDay === dayInfo.day && "border-2 border-yellow-600 ")
              }
            >
              <div className="font-bold mb-2">{dayInfo.day}</div>
              <div>
                {dayInfo.lessons.map((lesson, lessonIndex) => (
                  <div key={lessonIndex}>
                    <div className="text-gray-600">{lesson.subject}</div>
                    <div>
                      {lesson.startTime} - {lesson.endTime}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              key={index}
              className={
                "p-4 border bg-gray-100 rounded-lg " +
                (currentDay === dayInfo.day && "border-2 border-yellow-600 ")
              }
            >
              <div className="font-bold mb-2">{dayInfo.day}</div>
              <div className="text-gray-500">No lessons</div>
            </div>
          )
        )}
      </div>
      <div className="mt-6" />
    </div>
  );
};

export default Schedule;
