import { Wrapper } from "./styled";

const Result = ({ hideResult, resultValue, convertedCurrency }) => {
  return (
    <Wrapper $hideResult={hideResult}>
      Przeliczona wartość wynosi: {resultValue} {convertedCurrency}
    </Wrapper>
  );
};

export default Result;
