import { useState } from "react";

import SlButton from "@shoelace-style/shoelace/dist/react/button";
import SlDrawer from "@shoelace-style/shoelace/dist/react/drawer";
import SlIcon from "@shoelace-style/shoelace/dist/react/icon";
import SlTooltip from "@shoelace-style/shoelace/dist/react/tooltip";

import Schedule from "../components/Main/Scheldue";
import Appointmets from "../components/Main/Appointments";

type user = {
  username: string;
  _id: string;
  isAdmin: boolean;
};

interface Props {
  userData: user;
}

function Main(props: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mainState, setMainState] = useState("Scheldue");

  const handleNavigate = (newState: string): void => {
    setDrawerOpen(false);
    setMainState(newState);
  };

  return (
    <div className="h-screen w-screen bg-slate-100">
      <div
        style={{ height: "7%" }}
        className="flex bg-slate-300 justify-between items-center px-2"
      >
        <p className="text-lg text-gray-600">{mainState}</p>
        <div className="flex flex-row h-full items-center">
          <SlTooltip content={props.userData.username}>
            <div
              className="bg-yellow-200 rounded-full mr-2 text-gray-800 flex items-center justify-center text-lg cursor-pointer"
              style={{ width: "40px", height: "40px" }}
            >
              {props.userData.username.substring(0, 2)}
            </div>
          </SlTooltip>

          <SlButton onClick={() => setDrawerOpen(true)}>
            Menu <SlIcon className="ml-2" name="list" />
          </SlButton>
        </div>
      </div>
      <div className="h-full" style={{ height: "93%" }}>
        {mainState === "Scheldue" && <Schedule />}
        {mainState === "Appointments" && <Appointmets />}
      </div>

      <SlDrawer
        className="reg-drawer"
        open={drawerOpen}
        onSlAfterHide={() => setDrawerOpen(false)}
      >
        <div className="flex flex-row items-center" slot="label">
          <p>Menu</p>
          <SlIcon className="ml-2" name="list" />
        </div>
        <div
          onClick={() => handleNavigate("Scheldue")}
          className="w-full border rounded-md hover:bg-gray-200 cursor-pointer px-2 py-4 select-none flex flex-row items-center"
        >
          <SlIcon className="mr-3 ml-2" name="calendar" />
          <span>Scheldue</span>
        </div>
        <div
          onClick={() => handleNavigate("Appointments")}
          className="mt-1 w-full border rounded-md hover:bg-gray-200 cursor-pointer px-2 py-4 select-none flex flex-row items-center"
        >
          <SlIcon className="mr-3 ml-2" name="person" />
          <span>Appointments</span>
        </div>
        <div
          onClick={() => console.log("User logged out <3")}
          className="mt-1 w-full border rounded-md hover:bg-gray-200 cursor-pointer px-2 py-4 select-none flex flex-row items-center"
        >
          <SlIcon className="mr-3 ml-2" name="box-arrow-left" />
          <span>Log out</span>
        </div>
      </SlDrawer>
    </div>
  );
}

export default Main;
