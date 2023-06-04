import styled from "styled-components"

export const StyledContainer = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
  
  display: ${({display}) => {
    if(display === "flex"){
      return "Flex";
    }
      return "Block";
  }
  };

  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`