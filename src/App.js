import React from "react";
import "./App.css";
import { Table } from "./components/table/table";

function App() {
  return (
    <div className="app">
      <div>
        <h1 className="margin-bot">Student Table</h1>
        <Table />
      </div>
    </div>
  );
}

export default App;
