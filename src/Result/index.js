import "./style.css";

const Result = ({ hideResult, resultProps }) => {
  return (
    <p>
      <strong className={`result ${hideResult ? "result--hidden" : ""}`}>
        Przeliczona wartość wynosi: {resultProps.value} {resultProps.currency}
      </strong>
    </p>
  );
};

export default Result;
