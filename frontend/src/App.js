// General Import
import React, { useState } from 'react';


import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import SearchBar from "./components/SearchBar/SearchBar";
import VideoPage from './pages/VideoPage/VideoPage';
import Comments from './components/Comment/Comments';
import Videoplayer from './components/VideoPlayer/VideoPlayer';
import RelatedVideos from './components/RelatedVideos/RelatedVideos';
import CommentList from './components/Comment/CommentList';

function App() {
  
  
  const [userInput, setUserInput] = useState("");
  const getUserInput = (event) => {
    setUserInput(event.target.value);
  };
  
  
  return (
    <div>
      <Navbar />
      <SearchBar getUserInput={getUserInput} userInput={userInput} />
      
      <Videoplayer />
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
        <Route path="/searchpage" element={<PrivateRoute><SearchPage/></PrivateRoute>} />
        {/* <Route path="/searchbar" element={<SearchBar getUserInput={getUserInput} userInput={userInput} />} /> */}
        <Route path="videopage" element={<VideoPage />} />
      </Routes>
      
      <Comments />
      <RelatedVideos />
      <Footer />
    </div>
  );
}

export default App;
