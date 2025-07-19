import icon from "./calc-icon.svg";

export function Image() {
  return (
    <img
      src={icon}
      alt="calculator icon"
      className="w-30 opacity-90 contrast-0 hover:opacity-100 hover:scale-105 hover:contrast-100 duration-300"
    />
  );
}
