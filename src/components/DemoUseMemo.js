import { useMemo, useState } from "react";
import { findNthPrime } from "../utils/Helper";

const DemoUseMemo = () => {
  const [text, serchText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);


    // Heavy operation
  const prime = useMemo(() => findNthPrime(text), [text]);
  return (
    <div
      className={
        "p-2 m-2 w-96 h-96 border border-black" +
        (isDarkTheme && "border border-red-900")
      }
    >
      <div>
        <h1 className="flex justify-center font-extrabold text 2xl">useMemo</h1>
        <button
          className="p-2 m-2 bg-green-400"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="px-2 border border-black"
          type="number"
          value={text}
          onChange={(e) => serchText(e.target.value)}
        />
      </div>
      <h1 className="mt-3 font-bold">Nth prime: {prime} </h1>
    </div>
  );
};

export default DemoUseMemo;
