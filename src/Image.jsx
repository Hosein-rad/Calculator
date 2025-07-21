import icon from "./calc-icon.svg";

export function Image({ setIsHidden }) {
  return (
    <img
      src={icon}
      alt="calculator icon"
      onClick={() => setIsHidden((c) => !c)}
      className="w-30 scale-75 opacity-90 contrast-0 hover:opacity-100 hover:scale-100 hover:contrast-100 hover:cursor-zoom-in duration-300"
    />
  );
}
