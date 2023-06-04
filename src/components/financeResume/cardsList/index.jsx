import Cards from "../cards";
import {StyledList} from "./style.js"

const ListCards = ({ valueList, setValueList }) => {

  const removeValueCard = (valueId) => {
    setValueList((valueList) => valueList.filter(value => value.id !== valueId));
  }

  return (
      <StyledList>
        {valueList.map((value) => <Cards key={value.id} value={value} removeValueCard={removeValueCard} />)}
      </StyledList>
  )
}

export default ListCards;