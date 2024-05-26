import React from "react";

function Hometask() {
  return (
    <div className="h-screen w-screen homework-check-wrapper">
      <div
        className="w-full flex flex-row justify-between items-center"
        style={{
          height: "15%",
          paddingLeft: "7%",
          paddingRight: "7%",
          paddingTop: "2%",
          paddingBottom: "2%",
	//todo
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
          <p className="text-lg text-right w-full">Homework Check</p>
        </div>
      </div>
      <div
        style={{
          paddingTop: "5%",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
        className="w-full flex justify-center"
      >
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-200 px-4 py-2">Student</th>
              <th className="border border-gray-200 px-4 py-2">Assignment</th>
              <th className="border border-gray-200 px-4 py-2">Status</th>
              <th className="border border-gray-200 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-200 px-4 py-2">John Doe</td>
              <td className="border border-gray-200 px-4 py-2">System Analysis</td>
              <td className="border border-gray-200 px-4 py-2">Pending</td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                <button className="bg-green-500 text-white px-2 py-1 rounded">Mark as Done</button>
                <button className="bg-blue-500 text-white px-2 py-1 rounded ml-2">Add Comment</button>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-200 px-4 py-2">Jane Smith</td>
              <td className="border border-gray-200 px-4 py-2">Server Programming</td>
              <td className="border border-gray-200 px-4 py-2">Pending</td>
              <td className="border border-gray-200 px-4 py-2 text-center">
                <button className="bg-green-500 text-white px-2 py-1 rounded">Mark as Done</button>
                <button className="bg-blue-500 text-white px-2 py-1 rounded ml-2">Add Comment</button>
              </td>
            </tr>
            {/* More rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Hometask;
