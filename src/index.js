import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App";
import Input from "./components/Input";
import Reveal from "./components/Reveal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='input' element={<Input />} />
      <Route path='error' element={<Input />} />
      <Route path='reveal-messages' element={<Reveal />} />
    </Routes>
  </BrowserRouter>
);
