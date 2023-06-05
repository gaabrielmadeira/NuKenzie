import styled from "styled-components"

export const StyledContainer = styled.div`
  width: auto;
  height: 100%;
  
  display: ${({ display }) => {
    if (display === "flex") {
      return "Flex";
    }
    return "Block";
  }
  };

  max-width: 1200px;
  margin: ${({marginTop}) => {
    if (marginTop === "top") {
      return "30px auto";
    }
    return "0 auto";
  }};
  padding: 1rem;
`