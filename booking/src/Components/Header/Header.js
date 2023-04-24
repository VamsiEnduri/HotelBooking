import React, { useState } from "react";
import "./Header.css";
import {
  FaBed,
  FaPlane,
  FaCar,
  FaTaxi,
  FaCalendarDay,
  FaPersonBooth,
  // FaSadCry,
} from "react-icons/fa";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useNavigate } from "react-router-dom";
const Header = ({ type }) => {
  const [date, setDate] = useState([
    {
      statDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    child: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const navigate = useNavigate();
  const handleSerach = () => {
    navigate("/list", { state: { destination, date, options } });
  };
  return (
    <div className="header">
      {/* part - 1 */}
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItems actve">
            <FaBed className="icon" />
            <span>Stays</span>
          </div>
          <div className="headerListItems">
            <FaPlane className="icon" />
            <span>Plane</span>
          </div>
          <div className="headerListItems">
            <FaCar className="icon" />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItems">
            <FaTaxi className="icon" />
            <span>Airport Taxi</span>
          </div>
          <div className="headerListItems">
            <FaBed className="icon" />
            <span>Attractions</span>
          </div>
        </div>
        {/* part - 1 end */}

        {/* part -2 */}
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifeTime of discounts ? It's Genius
            </h1>
            <p className="headerDesc">
              Lorem ipsum dolor sit amet. Eum laboriosam dolor et quasi impedit
              ab culpa vero est quam
            </p>
            <button className="header-btn">Sign in /Register</button>
            {/* part - 2 end */}

            {/* part - 3 */}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FaBed className="headerSearch-icon" />
                <input
                  type="text"
                  placeholder="Where are you going ?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              {/*  */}
              <div className="headerSearchItem">
                <FaCalendarDay className="headerSearch-icon" />
                <span
                  className="headerSerachText"
                  onClick={() => setOpenDate(!openDate)}
                >
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
              {/*  */}
              <div className="headerSearchItem">
                <FaPersonBooth className="headerSearch-icon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSerachText"
                >{`${options.adult}adult . ${options.child}child  .${options.room}room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optioItem">
                      <span className=" optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounBtn"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCountNum">{options.adult}</span>

                        <button
                          className="optionCounBtn"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="optioItem">
                      <span className=" optionText">Child</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.child <= 0}
                          className="optionCounBtn"
                          onClick={() => handleOption("child", "d")}
                        >
                          -
                        </button>
                        <span className="optionCountNum">{options.child}</span>
                        <button
                          className="optionCounBtn"
                          onClick={() => handleOption("child", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="optioItem">
                      <span className=" optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounBtn"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCountNum">{options.room}</span>
                        <button
                          className="optionCounBtn"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/*  */}

              <div className="headerSearchItem">
                <button className="headerSearchBtn" onClick={handleSerach}>
                  Search
                </button>
              </div>
              {/* part -3 end */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
