import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import HotelList from "./Pages/HotelList/HotelList";
import Hotel from "./Pages/Hotel/Hotel";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/hotel_booking" element={<Home />} />
          <Route path="/list" element={<HotelList />} />
          <Route path="/list/:id" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
