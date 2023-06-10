import { currencies } from "../currencies";
import "./style.css";

const Select = ({ selectedCurrency, method }) => {
  return (
    <select
      className="select"
      onChange={({ target }) => method(target.value)}
      value={selectedCurrency}
    >
      {currencies.map((currency) => {
        return (
          <option key={currency.id} className="select__option">
            {currency.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
