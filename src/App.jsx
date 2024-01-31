

import React, { useState } from "react";
import {  Route, Routes, Link } from "react-router-dom";
import ShowList from "./ShowList";
import ShowDetails from "./ShowDetails";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShowList/>} />
        <Route path="/show/:id" element={<ShowDetails/>} />
      </Routes>
    </>
  );
}

export default App;
