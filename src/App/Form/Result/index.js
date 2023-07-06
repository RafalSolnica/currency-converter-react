import { Wrapper, Text } from "./styled";

const Result = ({ hideResult, resultValue, convertedCurrency }) => {
  return (
    <Wrapper $hideResult={hideResult}>
      <Text>
        Przeliczona wartość wynosi: {resultValue} {convertedCurrency}
      </Text>
    </Wrapper>
  );
};

export default Result;
