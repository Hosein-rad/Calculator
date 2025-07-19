import { useEffect, useMemo, useState } from "react";
import { Parser } from "expr-eval";
import { Image } from "./Image";
import { Key } from "./Key";
import { Keypad } from "./Keypad";


function App() {
  const [array, setArray] = useState([]);
  const [display, setDisplay] = useState();

  const parser = useMemo(() => new Parser(), []);

  useEffect(() => {
    const jsx = [...array];
    setDisplay(jsx);
  }, [array]);

  const arrayChanger = (label) => {
    if (label !== "=" && label !== "C" && label !== "⌫")
      setArray((c) => [...c, label]);
    console.log(array);
  };

  const submit = () => {
    const resultStrRaw = array.join("").replace(/×/g, "*").replace(/÷/g, "/");
    const result = parser
      .evaluate(resultStrRaw)
      // .toFixed(4) --> 1.1 * 3000 returns 3300.0000 | without it, returns 3300.00...005 <-- TO FIX
      .toString()
      .split("");
    setArray(result);
  };

  const backspace = () => {
    const newArr = array.slice(0, -1);
    setArray(newArr);
  };

  const reset = () => {
    setArray([]);
  };

  return (

    <div className="w-full h- flex flex-col center justify-center items-center">
      <Image />
      <div className="h-80 bg-[#3C4144] rounded-2xl">
        <div className="w-[90%] h-13 my-7  mx-auto rounded-full bg-neutral-300 shadow-[0_10px_15px]">
          {display}

        </div>
        <Keypad
          arrayChanger={arrayChanger}
          submit={submit}
          backspace={backspace}
          reset={reset}
        />
      </div>
    </div>
  );
}

export default App;
