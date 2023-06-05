
import Header from "./components/header";

import FinanceResume from "./components/financeResume";
import { useState } from "react";
import GlobalReset from "./styles/reset";
import GlobalStyles from "./styles/globalStyles";
import { StyledResponsive } from "./styles/app";
import { ContentSection } from "./components/contentSection";
import { StyledContainer } from "./styles/container";

const App = () => {
  const [valueList, setValueList] = useState([]);

  return (
    <>
      <GlobalStyles />
      <GlobalReset />
      <Header />
      <main>
        <StyledContainer marginTop="top">
          <StyledResponsive >
            <ContentSection valueList={valueList} setValueList={setValueList} />
            <FinanceResume valueList={valueList} setValueList={setValueList} />
          </StyledResponsive>
        </StyledContainer>
      </main>
    </>
  )
}

export default App;
