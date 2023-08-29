import { useState } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import "./style.css";
import Background from "./components/Background";

function App() {
  const [selectedCity, setSelectedCity] = useState("Istanbul");
  const [backgroundImage, setBackgroundImage] = useState("");
  const handleImageData = (data) => {
    setBackgroundImage(data);
  };

  const backgroundStyle = {
    backgroundImage: `url('${backgroundImage}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  };

  return (
    <div className="App" style={backgroundStyle}>
      <Header className="App-Header" setSelectedCity={setSelectedCity}></Header>
      <Weather city={selectedCity} sendBackgroundImage={handleImageData} />
    </div>
  );
}

export default App;
