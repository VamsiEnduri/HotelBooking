import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import "./HotelList.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const HotelList = () => {
  const location = useLocation();
  console.log(location);
  // const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h2 className="listSearch-title">Search</h2>
            <div className="lsItem">
              <label>desttination</label>
              <input type="Search" placeholder="Type Place" />
            </div>

            <div className="lsItem">
              <label>Check-in :</label>

              <span onClick={() => setOpenDate(!openDate)} className="span">
                {`${format(date[0].statDate, "MM/dd/yyyy")} to
              ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>

              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options :</label>
              <div className="lsOptionitem">
                <span className="lsOptionText">
                  Min Price&nbsp;&nbsp;<small>per night</small>
                </span>
                <input type="" className="lsOptionInput" />
              </div>

              <div className="lsOptionitem">
                <span className="lsOptionText">
                  Max Price&nbsp;&nbsp;<small>per night</small>
                </span>
                <input type="text" className="lsOptionInput" />
              </div>
              <div className="lsOptionitem">
                <span className="lsOptionText">Adult</span>
                <input
                  min={1}
                  type="text"
                  className="lsOptionInput"
                  placeholder={options.adult}
                />
              </div>
              <div className="lsOptionitem">
                <span className="lsOptionText">Child</span>
                <input
                  type="text"
                  className="lsOptionInput"
                  placeholder={options.child}
                />
              </div>
              <div className="lsOptionitem">
                <span className="lsOptionText">Room</span>
                <input
                  type="text"
                  className="lsOptionInput"
                  placeholder={options.room}
                  key={1}
                />
              </div>
            </div>
          </div>

          <div className="listResult">
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
