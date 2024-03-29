import { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Post";
import { BASE_URL } from "./config.ts";
import Submit from "./components/Submit.tsx";
import Nav from "./components/Nav.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./Registration.tsx";
import Main from "./components/Main.tsx";

function App() {
  return (
    <Router>
      <main className="bg-background lato-regular">
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/User/registration" element={<Registration />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
