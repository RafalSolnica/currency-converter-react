import Container from "./Container";
import Form from "./Form";
import Result from "./Result";
import { useState } from "react";

function App() {
  const [initialCurrency, setInitCurrency] = useState("PLN");
  const [amount, setAmount] = useState(0);
  const [convertedCurrency, setConvertedCurrency] = useState("USD");
  const [hideResult, setHideResult] = useState(true);
  const [resultValue, setResultValue] = useState(0);

  return (
    <Container>
      <Form
        initialCurrency={initialCurrency}
        setInitCurrency={setInitCurrency}
        amount={amount}
        setAmount={setAmount}
        convertedCurrency={convertedCurrency}
        setConvertedCurrency={setConvertedCurrency}
        setResultValue={setResultValue}
        setHideResult={setHideResult}
      />
      <Result
        hideResult={hideResult}
        resultValue={resultValue}
        convertedCurrency={convertedCurrency}
      />
    </Container>
  );
}

export default App;
