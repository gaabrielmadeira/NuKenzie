import { Styledh3, StyledSpanOne, StyledParagraphOne } from "../../../styles/typograph";
import {StyledDeleteButton} from "../../../styles/buttons";
import {StyledCards} from "./style.js";

const Cards = ({ value, removeValueCard }) => {
  const formatValue = (value) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  };

  return (
    <StyledCards>
      <Styledh3>{value.description}</Styledh3>
      <StyledSpanOne>{value.type}</StyledSpanOne>
      <StyledParagraphOne>{formatValue(Number(value.value))}</StyledParagraphOne>
      <StyledDeleteButton onClick={() => removeValueCard(value.id)}>Excluir</StyledDeleteButton>
    </StyledCards>
  );
}

export default Cards;