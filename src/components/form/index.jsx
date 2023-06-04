import { useState } from "react";
import { StyledInputs, StyledSelect } from "../../styles/form";
import { StyledLabel, StyledParagraphOne } from "../../styles/typograph";
import { StyledButtonDefault } from "../../styles/buttons";
import {StyledContainer} from "../../styles/container";
import {StyledForm} from "./style.js"
import { v4 as uuidv4 } from "uuid";

const Form = ({ setValueList }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  const addValueToList = () => {
    const newArr = { id: uuidv4(), description, value, type };
    setValueList((valueList) => [...valueList, newArr]);
  }

  const submit = (e) => {
    (e).preventDefault();
    addValueToList();
    setDescription("");
    setValue("");
    setType("Entrada");
  }

  return (
    <StyledContainer>
      <StyledForm onSubmit={submit}>
        <StyledLabel htmlFor="description">Descrição</StyledLabel>
        <StyledInputs type="text" id="description" placeholder="Digite aqui a sua descrição" required value={description} onChange={(e) => setDescription((e).target.value)} />
        <StyledParagraphOne fontColor="grey-3">Ex: compra de roupas</StyledParagraphOne>

        <StyledLabel htmlFor="value" >Valor(R$)</StyledLabel>
        <StyledInputs type="number" id="value" required value={value} onChange={(e) => setValue((e).target.value)} />

        <StyledLabel htmlFor="type">Tipo de valor</StyledLabel>
        <StyledSelect name="type" id="type" value={type} onChange={(e) => setType((e).target.value)}>
          <option value="Entrada">Entrada</option>
          <option value="Saida">Saida</option>
        </StyledSelect>

        <StyledButtonDefault type="submit">Inserir valor</StyledButtonDefault>
      </StyledForm>
    </StyledContainer>
  )
}

export default Form;