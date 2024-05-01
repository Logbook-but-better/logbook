import React from "react";
import "./App.css";
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";

import Authorization from "./pages/Auth";

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/"
);

function App() {
  return (
    <div>
      <Authorization />
    </div>
  );
}

export default App;
