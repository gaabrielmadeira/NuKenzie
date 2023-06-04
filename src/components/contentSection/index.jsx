import { StyledContentSection } from "./style";
import Form from "../form";
import SumValuesSection from "../sumValues";

export const ContentSection = ({ valueList, setValueList }) => {
  return (
      <StyledContentSection>
        <Form setValueList={setValueList} />
        {valueList.length > 0 ? (
          <SumValuesSection valueList={valueList} />
        ) : (null)}
      </StyledContentSection>
  )
}
