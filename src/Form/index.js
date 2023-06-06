import Buttons from "../Buttons";
import "./style.css";

const Form = () => {
  return (
    <form action="" className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Kantor walut</legend>
        <p>
          <label className="form__label">
            <span className="form__text">Wybierz walutę</span>
            <select className="form__field form__field--select">
              <option className="form__option">PLN</option>
              <option className="form__option">USD</option>
              <option className="form__option">EUR</option>
              <option className="form__option">GBP</option>
              <option className="form__option">CNY</option>
              <option className="form__option">AUD</option>
              <option className="form__option">CAD</option>
              <option className="form__option">CHF</option>
              <option className="form__option">JPY</option>
            </select>
          </label>
        </p>

        <p>
          <label className="form__label">
            <span className="form__text">
              Podaj wartość<span className="form__required">*</span>
            </span>
            <input type="number" className="form__field" inputMode="numeric" />
          </label>
        </p>

        <p>
          <label className="form__label">
            <span className="form__text">Wybierz walutę</span>
            <select className="form__field form__field--select">
              <option className="form__option">PLN</option>
              <option className="form__option">USD</option>
              <option className="form__option">EUR</option>
              <option className="form__option">GBP</option>
              <option className="form__option">CNY</option>
              <option className="form__option">AUD</option>
              <option className="form__option">CAD</option>
              <option className="form__option">CHF</option>
              <option className="form__option">JPY</option>
            </select>
          </label>
        </p>

        <Buttons />

        <p>
          Pola oznaczone symbolem <span className="form__required">*</span> są
          wymagane.
        </p>
      </fieldset>
    </form>
  );
};

export default Form;
