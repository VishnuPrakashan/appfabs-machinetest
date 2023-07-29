import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <div className="bubbles">
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
        <span className="four"></span>
        <span className="five"></span>
        <span className="six"></span>
        <span className="seven"></span>
      </div>

      <div className="container">
        <h2>CALCULATOR</h2>
        <form action="">
          <input type="text" id="result" value={value} />
          <div className="buttons">
            <input onClick={(e) => setValue("")} type="button" value="AC" />
            <input
              onClick={(e) => setValue(value + e.target.value)}
              type="button"
              value="/"
            />
            <input
              onClick={(e) => setValue(value + e.target.value)}
              type="button"
              value="%"
            />
            <input
              onClick={(e) => setValue(value.slice(0, -1))}
              type="button"
              value="&#9003;"
            />
          </div>
          <div className="buttons">
            <input
              onClick={(e) => setValue(value + e.target.value)}
              type="button"
              value="9"
            />
            <input
              onClick={(e) => setValue(value + e.target.value)}
              type="button"
              value="8"
            />
            <input
              onClick={(e) => setValue(value + e.target.value)}
              type="button"
              value="7"
            />
            <input
              onClick={(e) => setValue(value + e.target.value)}
              type="button"
              value="*"
            />
          </div>
          <div className="buttons">
            <input
              onClick={(e) => setValue(value + e.target.value)}
              type="button"
              value="6"
            />
            <input
              onClick={(e) => setValue(value + e.target.value)}
              type="button"
              value="5"
            />
            <input
              onClick={(e) => setValue(value + e.target.value)}
              type="button"
              value="4"
            />
            <input
              onClick={(e) => setValue(value + e.target.value)}
              type="button"
              value="-"
            />
          </div>
          <div className="buttons">
            <input
              onClick={(e) => setValue(value + e.target.value)}
              type="button"
              value="1"
            />
            <input
              onClick={(e) => setValue(value + e.target.value)}
              type="button"
              value="2"
            />
            <input
              onClick={(e) => setValue(value + e.target.value)}
              type="button"
              value="3"
            />
            <input
              onClick={(e) => setValue(value + e.target.value)}
              type="button"
              value="+"
            />
          </div>
          <div className="buttons">
            <input
              onClick={(e) => setValue(value + e.target.value)}
              type="button"
              value="0"
            />
            <input
              onClick={(e) => setValue(value + e.target.value)}
              type="button"
              value="00"
            />
            <input
              onClick={(e) => setValue(value + e.target.value)}
              type="button"
              value="."
            />
            <input
              onClick={(e) => setValue(eval(value))}
              type="button"
              value="="
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
