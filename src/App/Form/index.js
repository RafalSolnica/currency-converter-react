import Result from "./Result";
import Clock from "./Clock";
import { currencies } from "../../currencies";
import { useState } from "react";
import {
  StyledForm,
  Fieldset,
  Legend,
  StyledLabel,
  LabelText,
  Field,
  Option,
  Wrapper,
  Button,
} from "./styled";

const Form = () => {
  const [initialCurrency, setInitCurrency] = useState("PLN");
  const [convertedCurrency, setConvertedCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [hideResult, setHideResult] = useState(true);
  const [resultValue, setResultValue] = useState(0);

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

  const resetForm = (event) => {
    event.preventDefault();
    setAmount("");
    setInitCurrency("PLN");
    setConvertedCurrency("USD");
    setHideResult(true);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Kantor walut</Legend>
        <Clock />

        <StyledLabel>
          <LabelText>Wybierz walutę</LabelText>
          <Field
            as="select"
            value={initialCurrency}
            onChange={({ target }) => setInitCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <Option key={currency.name}>{currency.name}</Option>
            ))}
          </Field>
        </StyledLabel>

        <StyledLabel>
          <LabelText>Podaj wartość*</LabelText>
          <Field
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Wpisz kwotę"
            type="number"
            required
            step="0.01"
          />
        </StyledLabel>

        <StyledLabel>
          <LabelText>Wybierz walutę</LabelText>
          <Field
            as="select"
            value={convertedCurrency}
            $defaultValue="USD"
            onChange={({ target }) => setConvertedCurrency(target.value)}
          >
            {currencies.map((currency) => (
              <Option key={currency.name}>{currency.name}</Option>
            ))}
          </Field>
        </StyledLabel>

        <Wrapper>
          <Button>Przelicz</Button>
          <Button onClick={resetForm}>Wyczyść</Button>
        </Wrapper>

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
