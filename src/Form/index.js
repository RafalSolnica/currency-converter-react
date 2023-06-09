import { useState } from "react";
import Buttons from "../Buttons";
import Label from "../Label";
import Select from "../Select";
import Result from "../Result";
import "./style.css";

const Form = () => {
  const currencies = [
    { id: 1, name: "PLN", value: 1 },
    { id: 2, name: "USD", value: 4.42 },
    { id: 3, name: "EUR", value: 4.7 },
    { id: 4, name: "GBP", value: 5.33 },
    { id: 5, name: "CNY", value: 0.64 },
    { id: 6, name: "AUD", value: 2.94 },
    { id: 7, name: "CAD", value: 3.22 },
    { id: 8, name: "CHF", value: 4.78 },
    { id: 9, name: "JPY", value: 0.033 },
  ];

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
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kantor walut</legend>

        <Label
          text="Wybierz walutę"
          content={
            <Select
              currencies={currencies}
              selectedCurrency={initialCurrency}
              method={setInitCurrency}
            />
          }
        />

        <Label
          text="Podaj wartość*"
          content={
            <input
              type="number"
              min="1"
              max="999999999999"
              step="0.01"
              required
              className="form__field"
              amount={amount}
              onChange={({ target }) => handleInput({ target })}
            />
          }
        />

        <Label
          text="Wybierz walutę"
          content={
            <Select
              currencies={currencies}
              selectedCurrency={convertedCurrency}
              method={setConvertedCurrency}
            />
          }
        />

        <Buttons resetForm={resetForm} />

        <span>Pola oznaczone symbolem * są wymagane.</span>
      </fieldset>
      <Result
        hideResult={hideResult}
        resultValue={resultValue}
        convertedCurrency={convertedCurrency}
      />
    </form>
  );
};

export default Form;
