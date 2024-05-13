import React, { useState } from "react";

import SlTab from "@shoelace-style/shoelace/dist/react/tab";
import SlTabGroup from "@shoelace-style/shoelace/dist/react/tab-group";
import SlTabPanel from "@shoelace-style/shoelace/dist/react/tab-panel";
import SlRadioButton from "@shoelace-style/shoelace/dist/react/radio-button";
import SlInput from "@shoelace-style/shoelace/dist/react/input";
import SlRadioGroup from "@shoelace-style/shoelace/dist/react/radio-group";

const Appointmets = () => {
  const [dayState, setDayState] = useState([
    {
      time: "9:20 - 10:30",
      students: [
        {
          name: "Anton Oberemok",
          isPresent: "present",
          isOnline: false,
          diamonds_reward: 2,
          grade: undefined,
        },
        {
          name: "Petro Poroshenko",
          isPresent: "late",
          isOnline: true,
          diamonds_reward: 0,
          grade: 2,
        },
      ],
    },
    {
      time: "13:40 - 15:00",
      students: [
        {
          name: "Anton Oberemok",
          isPresent: "late",
          isOnline: false,
          diamonds_reward: 2,
          grade: 12,
        },
        {
          name: "Petro Poroshenko",
          isPresent: "absent",
          isOnline: true,
          diamonds_reward: 0,
          grade: 2,
        },
      ],
    },
  ]);

  const handleRadioButtonChange = (
    dayIndex: number,
    studentIndex: number,
    value: string
  ) => {
    const updatedDayState = [...dayState];
    updatedDayState[dayIndex].students[studentIndex].isPresent = value;
    setDayState(updatedDayState);
  };

  const handleGradeChange = (
    dayIndex: number,
    studentIndex: number,
    value: string
  ) => {
    let parsed_value: number = parseInt(value);

    if (parsed_value >= 1 && parsed_value <= 12) {
      const updatedDayState = [...dayState];
      updatedDayState[dayIndex].students[studentIndex].grade = parsed_value;
      console.log(updatedDayState);
      setDayState(updatedDayState);
    } else {
      const updatedDayState = [...dayState];

      setDayState(updatedDayState);
    }
  };

  return (
    <div className="h-full overflow-y-scroll lg:px-16 px-4 scrollbar-hidden">
      <SlTabGroup>
        {dayState.map((dayInfo, dayIndex) => (
          <>
            <SlTab slot="nav" panel={dayInfo.time}>
              {dayInfo.time}
            </SlTab>
            <SlTabPanel name={dayInfo.time}>
              {dayInfo.students.map((student, studentIndex) => (
                <div
                  key={studentIndex}
                  className="w-full bg-gray-200 rounded-lg border py-2 px-4 mt-1 flex flex-row justify-between items-center"
                >
                  <div className="flex flex-row items-center">
                    <div
                      className="bg-blue-400 mr-2 rounded-full"
                      style={{ width: "45px", height: "45px" }}
                    />
                    <span>{student.name}</span>
                  </div>
                  <div className="flex flex-row items-center">
                    <SlRadioGroup
                      size="small"
                      name={`radio-${dayIndex}-${studentIndex}`}
                      value={student.isPresent}
                      onChange={(e) =>
                        handleRadioButtonChange(
                          dayIndex,
                          studentIndex,
                          (e.target as HTMLInputElement).value
                        )
                      }
                    >
                      <SlRadioButton value="absent">absent</SlRadioButton>
                      <SlRadioButton value="late">late</SlRadioButton>
                      <SlRadioButton value="present">present</SlRadioButton>
                    </SlRadioGroup>
                    <SlInput
                      onSlChange={(e) =>
                        handleGradeChange(
                          dayIndex,
                          studentIndex,
                          (e.target as HTMLInputElement).value
                        )
                      }
                      value={student.grade?.toString()}
                      className="mx-2"
                      placeholder="Grade"
                      size="small"
                      type="number"
                      pill
                      min={0}
                      max={12}
                    />
                  </div>
                </div>
              ))}
            </SlTabPanel>
          </>
        ))}
        {/* <SlTab slot="nav" panel="general">
          General
        </SlTab>
        <SlTab slot="nav" panel="custom">
          Custom
        </SlTab>
        <SlTab slot="nav" panel="advanced">
          Advanced
        </SlTab>
        <SlTab slot="nav" panel="disabled" disabled>
          Disabled
        </SlTab> */}

        <SlTabPanel name="general">This is the general tab panel.</SlTabPanel>
        <SlTabPanel name="custom">This is the custom tab panel.</SlTabPanel>
        <SlTabPanel name="advanced">This is the advanced tab panel.</SlTabPanel>
        <SlTabPanel name="disabled">This is a disabled tab panel.</SlTabPanel>
      </SlTabGroup>
    </div>
  );
};

export default Appointmets;
