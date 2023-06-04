import styled from "styled-components";

export const StyledButtonDefault = styled.button`
  width: 100%;
  height: 48px;

  background: var(--color-primary);

  border: 2px solid var(--color-primary);
  border-radius: 0.5rem;

  font-family: var(--font-secundary);
  font-weight: var(--font-weigth-2);
  font-size: var(--font-size-3);
  line-height: 1.1875rem;

  color: var(--color-white);

  :hover{
    background: var(--color-primary-2);
    color: var(--color-grey-1);
    transition: 0.3s;
  }

  :active{
    background: var(--color-primary-2);
    color: var(--color-grey-1);
  }
`

export const StyledDeleteButton = styled.button`
  width: 3.0625rem;
  height: 1.1875rem;
  
  background: var(--color-grey-2);
  border-radius: 0.125rem;

  font-family: var(--font-primary);
  font-weight: var(--font-weigth-3);
  font-size: var(--font-size-4);
  line-height: 0.875rem;

  color: var(--color-grey-4);

  :hover{
    background: var(--color-grey-4);
    color: var(--color-grey-2);
    transition: 0.3s;
  }

  :active{
    background: var(--color-grey-4);
    color: var(--color-grey-2);
  }
`

