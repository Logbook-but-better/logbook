import React from "react";

import SlIcon from "@shoelace-style/shoelace/dist/react/icon";
import SlInput from "@shoelace-style/shoelace/dist/react/input";

function Authorization() {
  return (
    <div className="h-screen w-screen authorization-wrapper">
      <div
        className="w-full flex flex-row justify-between items-center"
        style={{
          height: "15%",
          paddingLeft: "7%",
          paddingRight: "7%",
          paddingTop: "2%",
          paddingBottom: "2%",
        }}
      >
        <div style={{ width: "500px" }}>
          <p className="text-lg">En</p>
        </div>

        <img
          style={{ height: "110px" }}
          src={
            "https://s3-alpha-sig.figma.com/img/ea58/f75b/3e9abb17fc2a5ae567f590ec48b9b525?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G8HWuqXZe2C1BusOHzy5yu2ArfLXU2ViTrvHhmf-TZOQ223L1rbgLFNrHGINiikuG4OjIzoroR3lDhaTdNQMOSbr4~Ifln5~tkmqeZ7F9GurzpAwKvuQjiwJZzmFcrymKoSPJW9RQxZv2Cf5jcZnnNBpkK-jN4j86oWkTCDJFntUauS1sT9nXUuSOGWNcErYht1PdTm6wq~QMdcVDYB87GYOnYiMcV-n-lsE4~rA0kMcS5nhOsCIBdmyabpY9rhlbbFCABEw1y0zFBKfGPsD00n62~3jkV0mty3DmVdwuqfm6Be4Biyyk8DWvLgFaTLaQEWcZXuqyk9~bFo9Ipo~Vw__"
          }
        />
        <div style={{ width: "500px" }}>
          <p className="text-lg text-right w-full">Logbook</p>
        </div>
      </div>
      <div
        style={{
          paddingTop: "10%",
        }}
        className="w-full flex justify-center"
      >
        <div className="w-1/6">
          <SlInput placeholder="Username" size="medium" pill>
            <SlIcon name="person" slot="prefix"></SlIcon>
          </SlInput>
          <SlInput
            className="mt-2"
            placeholder="Password"
            size="medium"
            pill
            passwordToggle
          >
            <SlIcon name="lock" slot="prefix"></SlIcon>
          </SlInput>

          <div className="select-none mt-8 cursor-pointer w-full bg-blue-600 hover:bg-blue-500 text-center text-white font-bold py-2 rounded-lg">
            Get Started
          </div>
          <div className="w-full flex flex-row justify-between items-center mt-2 select-none">
            <p className="cursor-pointer">Create Account</p>
            <p className="cursor-pointer">Need Help?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authorization;
