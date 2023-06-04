import NuKenzieLogo from "../../assets/NuKenzie.png";
import {StyledContainer} from "../../styles/container";
import {StyledHeader, StyledLogo} from "./style.js";

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer display="flex">
        <StyledLogo src={NuKenzieLogo} alt="Logo do Nu Kenzie" />
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header;