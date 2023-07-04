import { currencies } from "../../currencies";
import { StyledSelect, Option } from "./styled";

const Select = ({ selectedCurrency, method }) => {
  return (
    <StyledSelect
      onChange={({ target }) => method(target.value)}
      value={selectedCurrency}
    >
      {currencies.map((currency) => {
        return <Option key={currency.name}>{currency.name}</Option>;
      })}
    </StyledSelect>
  );
};

export default Select;
