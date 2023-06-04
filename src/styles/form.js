import styled from "styled-components";
import { css } from "styled-components";

const StyledDefault = css`
  width: 100%;
  height: 3rem;

  background: var(--color-grey-1);
  border: 0.125rem solid var(--color-grey-1);
  border-radius: 0.5rem;
  padding: 0.6875rem 1rem;
`

export const StyledInputs = styled.input` 
  ${StyledDefault}

  font-family: var(--font-secundary);
  font-weight: var(--font-weigth-4);
  font-size: var(--font-size-3);
  line-height: 1.625rem;
  
  color: var(--color-grey-3);
`

export const StyledSelect = styled.select`
  ${StyledDefault}

  font-family: var(--font-secundary);
  font-weight: var(--font-weigth-4);
  font-size: var(--font-size-4);
  line-height: 1.625rem;
  
  color: var(--color-grey-4);
`