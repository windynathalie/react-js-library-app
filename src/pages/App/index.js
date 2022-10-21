import "../../App.css";
import React from "react";
import Login from "../Login";
import Content from "../Content";
import Register from "../Register";
import Home from "../Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/content/:bookId" element={<Content />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
