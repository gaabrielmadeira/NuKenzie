import EmptyValues from "../emptyValues";
import ListCards from "./cardsList";
import { Styledh3 } from "../../styles/typograph"
import {StyleFinanceResume} from "./style";

const FinanceResume = ({ valueList, setValueList }) => {
  return (
      <StyleFinanceResume>
        <Styledh3>Resumo Financeiro</Styledh3>
        {valueList.length > 0 ? (
          <ListCards valueList={valueList} setValueList={setValueList} />
        ) : (
          <EmptyValues />
        )}
      </StyleFinanceResume>
  )
}

export default FinanceResume;