import { useEffect, useMemo, useState } from "react";
import { Parser } from "expr-eval";
import { Image } from "./Image";
import { Keypad } from "./Keypad";
import { KeyContexts } from "./Contexts";

function App() {
  const [array, setArray] = useState([]);
  const [display, setDisplay] = useState();
  const [isHidden, setIsHidden] = useState(true);

  const parser = useMemo(() => new Parser(), []);
  useEffect(() => {
    const jsx = [...array];
    setDisplay(jsx);
  }, [array]);

  const arrayChanger = (label) => {
    if (label !== "=" && label !== "C" && label !== "⌫")
      setArray((c) => [...c, label]);
  };

  const submit = () => {
    const resultStrRaw = array.join("").replace(/×/g, "*").replace(/÷/g, "/");
    const result = parser
      .evaluate(`roundTo(${resultStrRaw},4)`)
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
    <KeyContexts.Provider value={{ arrayChanger, submit }}>
      <p className="text-white text-2xl text-center">
        
        Your <br />
        Website <br />
        Goes <br />
        Here. <br />
        This <br />
        Is <br />
        A <br />
        Fixed <br />
        Position <br />
        Functionning <br />
        Calculator <br />
        That <br />
        Shows <br />
        Or hides <br />
        When <br />
        User <br />
        Clicks <br />
        On the <br />
        Calculator <br />
        Image <br />
         <br />
         <br />
         <br />
      </p>
      <div className="my-2 mx-2 flex flex-col justify-center items-end top-0 right-0 fixed">
        {/* calculator icon */}
        <Image setIsHidden={setIsHidden} />
        {/* calculator div */}
        <div
          className={`h-80 bg-[#3C4144] rounded-2xl open:scale-1 ${
            isHidden ? "scale-0" : null
          } duration-300 origin-top-right`}
        >
          <div className="w-[90%] h-13 my-7  mx-auto rounded-full bg-neutral-300 shadow-[0_10px_15px]">
            {display}
          </div>
          <Keypad backspace={backspace} reset={reset} />
        </div>
      </div>
    </KeyContexts.Provider>
  );
}

export default App;
