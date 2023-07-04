import { StyledResult } from "./styled";

const Result = ({ hideResult, resultValue, convertedCurrency }) => {
  return (
    <p>
      <StyledResult $hideResult={hideResult}>
        Przeliczona wartość wynosi: {resultValue} {convertedCurrency}
      </StyledResult>
    </p>
  );
};

export default Result;
