import { useState } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import "./style.css";

function App() {
  const [selectedCity, setSelectedCity] = useState("Istanbul");

  return (
    <div className="App">
      <Header className="App-Header" setSelectedCity={setSelectedCity}></Header>
      <Weather city={selectedCity} />
    </div>
  );
}

export default App;
