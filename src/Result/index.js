import "./style.css";

const Result = ({ hideResult }) => {
  return (
    <p>
      <strong className={`result ${hideResult ? "result--hidden" : ""}`}>
        Test
      </strong>
    </p>
  );
};

export default Result;
