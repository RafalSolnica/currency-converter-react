import { useState } from "react";
import Buttons from "../Buttons";
import Label from "../Label";
import Select from "../Select";
import { currencies } from "../currencies";
import "./style.css";

const Form = ({
  initialCurrency,
  setInitCurrency,
  amount,
  setAmount,
  convertedCurrency,
  setConvertedCurrency,
  setResultValue,
  setHideResult,
}) => {
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
              selectedCurrency={convertedCurrency}
              method={setConvertedCurrency}
            />
          }
        />

        <Buttons resetForm={resetForm} />

        <span>Pola oznaczone symbolem * są wymagane.</span>
      </fieldset>
    </form>
  );
};

export default Form;
