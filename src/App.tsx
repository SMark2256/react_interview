import React from 'react';
import './App.css';
import GuestForm from "./components/GuestForm";
import MealSchedule from "./components/MealSchedule";

function App() {
  return (
    <div className="App">
      <GuestForm></GuestForm>
      <MealSchedule></MealSchedule>
    </div>
  );
}

export default App;
