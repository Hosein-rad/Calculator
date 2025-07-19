export function Key({ label, style, arrayChanger, submit }) {
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
