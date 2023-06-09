import "./style.css";

const Result = ({ hideResult, resultValue, convertedCurrency }) => {
  return (
    <p>
      <strong className={`result ${hideResult ? "result--hidden" : ""}`}>
        Przeliczona wartość wynosi: {resultValue} {convertedCurrency}
      </strong>
    </p>
  );
};

export default Result;
