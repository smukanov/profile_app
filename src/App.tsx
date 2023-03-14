import React from "react";
import { SideBar } from "./layouts/sidebar";
import { TopBar } from "./layouts/topbar";
import { MainRoute } from "./routes/main_route";

const App = () => {
  return (
    <div className="container px-8 pt-6">
      <div className="grid test">
        <SideBar />
        <TopBar />
        <div style={{ gridArea: "content" }}>
          <MainRoute />
        </div>
      </div>
    </div>
  );
};

export default App;
