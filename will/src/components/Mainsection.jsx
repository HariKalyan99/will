import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

const Mainsection = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar  />
      <Dashboard    />
    </div>
  );
};

export default Mainsection;
