import { useEffect, useState } from "react";
import icon from "./calc-icon.svg";
import { Parser } from "expr-eval";

function App() {
  const [operation, setOperation] = useState([]);
  const [result, setResult] = useState();
  const [display, setDisplay] = useState(true);
  const [error, setError] = useState(null);

  const jsx = operation.join("");

  useEffect(() => {
    let showUp = jsx.replace(/\//g, "÷");
    showUp = showUp.replace(/\*/g, "×");
    setResult(showUp);
    if (error) {
      finalResult();
      setError(null);
    }
  }, [operation, jsx]);

  function finalResult() {
    try {
      const parser = new Parser();
      const finalRes = parser.evaluate(jsx);
      setResult(Number(finalRes));
      setOperation([Number(finalRes)]);
    } catch (error) {
      console.log(error);
      setError("Wrong Entry");
    }
  }

  function backspace() {
    const newArr = operation.slice(0, -1);
    setOperation(newArr);
  }

  return (
    <div className="flex">
      <img
        id="icon"
        onClick={() => setDisplay(!display)}
        src={icon}
        alt="calculator-icon"
        width="60px"
        height="60px"
      />
      <div className="error">{error}</div>
      <div className={`container ${display ? "hidden" : null}`}>
        <div className="screen">
          <p>{result}</p>
        </div>
        <div className="grid numPad">
          <button onClick={() => backspace()}>⌫</button>
          <button onClick={() => setOperation([])}>C</button>
          <button onClick={() => setOperation((c) => [...c, "!"])}>!</button>
          <button onClick={() => setOperation((c) => [...c, "*"])}>×</button>
          <button onClick={() => setOperation((c) => [...c, "7"])}>7</button>
          <button onClick={() => setOperation((c) => [...c, "8"])}>8</button>
          <button onClick={() => setOperation((c) => [...c, "9"])}>9</button>
          <button onClick={() => setOperation((c) => [...c, "/"])}>÷</button>
          <button onClick={() => setOperation((c) => [...c, "4"])}>4</button>
          <button onClick={() => setOperation((c) => [...c, "5"])}>5</button>
          <button onClick={() => setOperation((c) => [...c, "6"])}>6</button>
          <button onClick={() => setOperation((c) => [...c, "-"])}>-</button>
          <button onClick={() => setOperation((c) => [...c, "1"])}>1</button>
          <button onClick={() => setOperation((c) => [...c, "2"])}>2</button>
          <button onClick={() => setOperation((c) => [...c, "3"])}>3</button>
          <button onClick={() => setOperation((c) => [...c, "+"])}>+</button>
          <button onClick={() => setOperation((c) => [...c, "0"])}>0</button>
          <button onClick={() => setOperation((c) => [...c, "000"])}>
            000
          </button>
          <button onClick={() => setOperation((c) => [...c, "."])}>.</button>
          <button onClick={() => finalResult()} className="row-span">
            {""}=
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
