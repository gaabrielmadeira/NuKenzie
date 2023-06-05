import styled from "styled-components";


export const StyledCards = styled.li`
  width: 100%;
  height: 156px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  border-left: ${({type}) => {
    if (type === "Entrada") {
      return "0.25rem solid var(--color-secundary)";
    }
    return "0.25rem solid var(--color-grey-2)";
  }};
  border-radius: 0.25rem;
  padding: 0 0.875rem;
  background: var(--color-white);

  :hover{
    background: var(--color-grey-1);
  }

  :active{
    background: var(--color-grey-1);
  }

  .description{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
  }

  .value{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.3125rem;
  }

  @media(min-width: 980px){
    height: 87px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

