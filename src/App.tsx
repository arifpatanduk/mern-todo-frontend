import React from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import PlusButton from "./components/PlusButton";
import TaskList from "./components/TaskList";

function App() {
  return (
    <main className="container relative bg-darkPurple mx-auto max-w-lg p-4 box-border min-h-screen">
      <Header />
      <TaskList />
      {/* <Form /> */}
      <PlusButton />
    </main>
  );
}

export default App;
