import NuKenzieLogo from "../../assets/NuKenzie.png";
import {StyledContainer} from "../../styles/container";
import {StyledHeader} from "./style.js";

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer display="flex">
        <img className="HeaderLogo" src={NuKenzieLogo} alt="Logo do Nu Kenzie" />
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header;