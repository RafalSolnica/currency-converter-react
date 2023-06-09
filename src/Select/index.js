const Select = ({ currencies, selectedCurrency, method }) => {
  return (
    <select
      className="form__field form__field--select"
      onChange={({ target }) => method(target.value)}
      value={selectedCurrency}
    >
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
