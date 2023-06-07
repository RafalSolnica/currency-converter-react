import Buttons from "../Buttons";
import Label from "../Label";
import Select from "../Select";
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
  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kantor walut</legend>

        <Label
          text="Wybierz walutę"
          content={<Select currencies={currencies} />}
        />

        <Label
          text="Podaj wartość*"
          content={
            <input type="number" className="form__field" inputMode="numeric" />
          }
        />

        <Label
          text="Wybierz walutę"
          content={<Select currencies={currencies} />}
        />

        <Buttons />

        <span>Pola oznaczone symbolem * są wymagane.</span>
      </fieldset>
    </form>
  );
};

export default Form;
