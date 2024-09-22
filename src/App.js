import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((prev) => prev + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((prev) => prev - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult((prev) => prev * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    const value = Number(inputRef.current.value);
    if (value === 0) {
      alert("Cannot divide by zero");
    } else {
      setResult((prev) => prev / value);
    }
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = '';
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <h1>Simplest Working Calculator</h1>
      <form>
        <p className="result">{result}</p>
        <input
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <div className="buttons">
          <button type="button" onClick={plus}>Add</button>
          <button type="button" onClick={minus}>Subtract</button>
          <button type="button" onClick={times}>Multiply</button>
          <button type="button" onClick={divide}>Divide</button>
        </div>
        <div className="reset-buttons">
          <button type="button" onClick={resetInput}>Reset Input</button>
          <button type="button" onClick={resetResult}>Reset Result</button>
        </div>
      </form>
    </div>
  );
}

export default App;
