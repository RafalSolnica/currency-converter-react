import "./style.css";

const Select = ({ currencies }) => {
  return (
    <select className="form__field form__field--select">
      {currencies.map((currency) => {
        return (
          <option key={currency.id} className="form__option">
            {currency.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
