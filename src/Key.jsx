import { useContext } from "react";
import { KeyContexts } from "./Contexts";
export function Key({ label, style }) {
  const { arrayChanger, submit } = useContext(KeyContexts);

  return (
    <button
      className={`${style} hover:cursor-pointer`}
      onClick={() => {
        arrayChanger(label);
        if (label === "=") {
          submit();
        }
      }}
    >
      {label}
    </button>
  );
}
