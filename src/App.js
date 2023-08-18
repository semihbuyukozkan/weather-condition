import { useState } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import "./style.css";
import Background from "./components/Background";

function App() {
  const [selectedCity, setSelectedCity] = useState("Istanbul");
  const [backgroundImage, setBackgroundImage] = useState("");

  return (
    <Background backgroundImage={backgroundImage}>
      <div className="App">
        <Header
          className="App-Header"
          setSelectedCity={setSelectedCity}
        ></Header>
        <Weather city={selectedCity} setBackgroundImage={setBackgroundImage} />
      </div>
    </Background>
  );
}

export default App;
