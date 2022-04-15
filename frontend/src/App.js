// General Import
import React, { useState } from 'react';


import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddCommentPage from "./pages/AddCommentPage/Comment";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  
  
  const [userInput, setUserInput] = useState("");
  const getUserInput = (event) => {
    setUserInput(event.target.value);
  };
  
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addcomment" element={<PrivateRoute><AddCommentPage/></PrivateRoute>} />
        <Route path="/searchbar" element={<SearchBar getUserInput={getUserInput} userInput={userInput} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
