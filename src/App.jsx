import Form from "./components/form";
import Header from "./components/header";
import SumValuesSection from "./components/sumValues";
import FinanceResume from "./components/financeResume";
import { useState } from "react";
import GlobalReset from "./styles/reset";
import GlobalStyles from "./styles/globalStyles";


const App = () => {
  const [valueList, setValueList] = useState([]);

  return (
    <>
      <GlobalStyles />
      <GlobalReset />
      <Header />
      <main>
        <Form setValueList={setValueList}/>
        <SumValuesSection valueList={valueList}/>
        <FinanceResume valueList={valueList} setValueList={setValueList}/>
      </main>
    </>
  )

}

export default App;
