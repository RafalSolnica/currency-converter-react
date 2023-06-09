import { useState } from "react";
import Buttons from "../Buttons";
import Label from "../Label";
import Select from "../Select";
import Result from "../Result";
import "./style.css";

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

const Form = () => {
  const [initialCurrency, setInitCurrency] = useState("PLN");
  const [amount, setAmount] = useState(0);
  const [convertedCurrency, setConvertedCurrency] = useState("PLN");
  const [hideResult, setHideResult] = useState(true);
  const [error, setError] = useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(initialCurrency, amount, convertedCurrency);
    if (amount <= 0) {
      setError(true);
    }
    setHideResult(!hideResult);
  };

  const resetForm = () => {
    setAmount(0);
    setError(false);
    console.log("Reset");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kantor walut</legend>

        <Label
          text="Wybierz walutę"
          content={<Select currencies={currencies} method={setInitCurrency} />}
        />

        <Label
          text="Podaj wartość*"
          content={
            <input
              type="number"
              className={`form__field ${error ? "form__field--error" : ""}`}
              inputMode="numeric"
              amount={amount}
              onChange={({ target }) => setAmount(target.value)}
            />
          }
        />

        <Label
          text="Wybierz walutę"
          content={
            <Select currencies={currencies} method={setConvertedCurrency} />
          }
        />

        <Buttons resetForm={resetForm} />

        <span>Pola oznaczone symbolem * są wymagane.</span>
      </fieldset>
      <Result hideResult={hideResult} />
    </form>
  );
};

export default Form;
