import { useState } from "react";
import { Dropdown } from "react-bootstrap";

function Header(props) {
  const handleCitySelect = (city) => {
    props.setSelectedCity(city);
  };

  return (
    <header className="text-center mt-5">
      <h1 className="display-4">Weather Condition App</h1>
      <p className="lead">Choose a city to see weather</p>
      <div>
        <button
          className="btn btn-primary mr-2"
          onClick={() => handleCitySelect("Istanbul")}
        >
          İstanbul
        </button>
        <button
          className="btn btn-primary mr-2"
          onClick={() => handleCitySelect("Ankara")}
        >
          Ankara
        </button>
        <button
          className="btn btn-primary"
          onClick={() => handleCitySelect("Izmir")}
        >
          İzmir
        </button>
      </div>
    </header>
  );
}

export default Header;
