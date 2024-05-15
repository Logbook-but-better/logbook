import React, { useState } from "react";
import "./App.css";
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
import { Routes, Route } from "react-router-dom";

import Authorization from "./pages/Auth";
import Main from "./pages/Main";
import Hometask from "./pages/Hometask";

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/"
);

function App() {
  const [userData, setUserData] = useState({
    _id: "12@#2434A3243",
    username: "Oleg Parshikov",
    isAdmin: false,
  });

  return (
    <div>
      <Routes>
        <Route path="auth" element={<Authorization />} />
        <Route path="hometask" element={<Hometask />} />
        <Route path="" element={<Main userData={userData} />} />
        <Route
          path="*"
          element={
            <p>
              <strong>404:</strong>not found
            </p>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
