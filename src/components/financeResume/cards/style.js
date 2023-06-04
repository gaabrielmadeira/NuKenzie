import styled from "styled-components";

export const StyledCards = styled.li`
  width: 100%;
  height: 156px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  border-left: 0.25rem solid var(--color-grey-2);
  border-radius: 0.25rem;
  padding: 0 0.875rem;
  background: var(--color-white);

  :hover{
    background: var(--color-grey-1);
    border-left: 0.25rem solid var(--color-secundary);
    transition: 0.3s;
  }

  :active{
    background: var(--color-grey-1);
    border-left: 0.25rem solid var(--color-secundary);
  }
`