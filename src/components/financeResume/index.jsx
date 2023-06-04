import EmptyValues from "../emptyValues";
import ListCards from "./cardsList";
import {StyledContainer} from "../../styles/container";
import { Styledh3 } from "../../styles/typograph"

const FinanceResume = ({ valueList, setValueList }) => {
  return (
    <StyledContainer>
      <section>
        <Styledh3>Resumo Financeiro</Styledh3>
        {valueList.length > 0 ? (
          <ListCards valueList={valueList} setValueList={setValueList} />
        ) : (
          <EmptyValues />
        )}
      </section>
    </StyledContainer>
  )
}

export default FinanceResume;