import { useState } from "react";
import "./App.css";
import Navigatorbar from "./components/Navigatorbar";
import Dashboard from "./components/Dashboard";


function App() {

  return (
    <>
      <div className="w-full flex">
        <Navigatorbar />

        <Dashboard />
      </div>
    </>
  );
}

export default App;
