import styled, { css } from "styled-components";


const StyledTitle = css`
  font-family: var(--font-primary);
  font-weight: var(--font-weigth-1);
  font-size: ${({ fontSize }) => {
    if (fontSize === "big") {
      return "var(--font-size-1)";
    } else if (fontSize === "resp") {
      return "clamp(var(--font-size-4), 5vw, var(--font-size-1));"
    }
    return "var(--font-size-2)";
  }};
  line-height: ${({ lineHeight }) => {
    if (lineHeight === "big") {
      return "155%";
    }
    return "188%";
  }};

  color: ${({ fontColor }) => {
    if (fontColor === "primary") {
      return "var(--color-primary)";
    }
    return "var(--color-grey-4)";
  }};
`

const HeadlineText = css`
  font-family: var(--font-primary);
  font-weight: var(--font-weigth-3);
  font-size: ${({ fontSize }) => {
    if (fontSize === "big") {
      return "var(--font-size-2)";
    }
    return "var(--font-size-3)";
  }};
  line-height: ${({ lineHeight }) => {
    if (lineHeight === "big") {
      return "162%";
    }
    return "183%";
  }};

  color: ${({fontColor}) => {
    if (fontColor === "grey-3") {
      return "var(--color-grey-3)";
    }
    return "var(--color-grey-4)";
  }}; 
`

export const StyledH2 = styled.h2`
  ${StyledTitle};
`
export const Styledh3 = styled.h3`
  ${StyledTitle};
`
export const StyledSpanTwo = styled.span`
  ${StyledTitle};
`
export const StyledLabel = styled.label`
  ${HeadlineText};
`
export const StyledParagraphOne = styled.p`
  ${HeadlineText};
`
export const StyledSpanOne = styled.span`
  ${HeadlineText};
`