import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

function Header(props) {
  const handleCitySelect = (city) => {
    props.setSelectedCity(city);
  };

  return (
    <header className="text-center">
      <h1 className="display-4">Weather Condition App</h1>
      <p className="lead">Choose a city to see weather</p>
      <div>
        <Dropdown>
          <DropdownToggle variant="secondary" id="cityDropdown">
            Choose City
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => handleCitySelect("Istanbul")}>
              İstanbul
            </DropdownItem>
            <DropdownItem onClick={() => handleCitySelect("Ankara")}>
              Ankara
            </DropdownItem>
            <DropdownItem onClick={() => handleCitySelect("Izmir")}>
              İzmir
            </DropdownItem>
            <DropdownItem onClick={() => handleCitySelect("Denizli")}>
              Denizli
            </DropdownItem>
            <DropdownItem onClick={() => handleCitySelect("Konya")}>
              Konya
            </DropdownItem>
            <DropdownItem onClick={() => handleCitySelect("Hakkari")}>
              Hakkari
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </header>
  );
}

export default Header;
