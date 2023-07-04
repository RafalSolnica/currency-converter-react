import Label from "./Label";
import Select from "./Select";
import Buttons from "../Buttons";
import Result from "./Result";
import Clock from "./Clock";
import { currencies } from "../currencies";
import { useState } from "react";
import { StyledForm, Fieldset, Legend, Input } from "./styled";

const Form = () => {
  const [initialCurrency, setInitCurrency] = useState("PLN");
  const [amount, setAmount] = useState(0);
  const [convertedCurrency, setConvertedCurrency] = useState("USD");
  const [hideResult, setHideResult] = useState(true);
  const [resultValue, setResultValue] = useState(0);

  const handleInput = ({ target }) => {
    setAmount(target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    setResultValue(
      (
        (amount *
          currencies.find((currency) => currency.name === initialCurrency)
            .value) /
        currencies.find((currency) => currency.name === convertedCurrency).value
      ).toFixed(2)
    );

    setHideResult(false);
  };

  const resetForm = () => {
    setAmount(0);
    setHideResult(true);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Kantor walut</Legend>
        <Clock />

        <Label
          text="Wybierz walutę"
          content={
            <Select
              selectedCurrency={initialCurrency}
              method={setInitCurrency}
            />
          }
        />

        <Label
          text="Podaj wartość*"
          content={
            <Input
              type="number"
              min="1"
              max="999999999999"
              step="0.01"
              required
              $amount={amount}
              onChange={({ target }) => handleInput({ target })}
            />
          }
        />

        <Label
          text="Wybierz walutę"
          content={
            <Select
              selectedCurrency={convertedCurrency}
              method={setConvertedCurrency}
            />
          }
        />

        <Buttons resetForm={resetForm} />

        <span>Pola oznaczone symbolem * są wymagane.</span>
      </Fieldset>

      <Result
        hideResult={hideResult}
        resultValue={resultValue}
        convertedCurrency={convertedCurrency}
      />
    </StyledForm>
  );
};

export default Form;
