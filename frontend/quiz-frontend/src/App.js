import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateQuiz from "./pages/CreateQuiz";
import AddQuestions from "./pages/AddQuestions";


import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard"; // we will create next

function App() {
  return (
    <Router>
      <Routes>

        {/* Default page */}
        <Route path="/" element={<Login />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Signup page */}
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard page */}
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/add-questions" element={<AddQuestions />} />



      </Routes>
    </Router>
  );
}

export default App;
