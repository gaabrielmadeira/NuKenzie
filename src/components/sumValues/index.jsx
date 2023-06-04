import { useState, useEffect } from "react";
import { Styledh3, StyledParagraphOne, StyledSpanTwo } from "../../styles/typograph";
import {StyledContainer} from "../../styles/container";
import {StyledSumSection, StyledTotalValue } from "./style.js";

const SumValuesSection = ({ valueList }) => {
  const [totalValue, setTotalValue] = useState(0);

  const sumTotalValue = () => {
    setTotalValue(valueList.reduce((totalMoney, money) => money.type === "Entrada" ? totalMoney + Number(money.value) : totalMoney - Number(money.value), 0));
  }

  useEffect(() => {
    sumTotalValue();
  }, [valueList]);

  const formatedTotalValue = totalValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <StyledContainer>
      <StyledSumSection >
        <StyledTotalValue>
          <Styledh3>Valor Total:</Styledh3>
          <StyledSpanTwo fontColor="primary">{formatedTotalValue}</StyledSpanTwo>
        </StyledTotalValue>
        <StyledParagraphOne>O valor se refere ao saldo</StyledParagraphOne>
      </StyledSumSection>
    </StyledContainer>
  )
}

export default SumValuesSection;