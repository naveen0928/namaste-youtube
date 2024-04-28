import { useEffect, useRef, useState } from "react";

const DemoUseRef = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const ref = useRef(0);

  // useCase of useRef starts
  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("useRef use case -> " + Math.random());
    }, 1000);

    return () => clearInterval(i.current);
  });

  return (
    <div className="p-2 m-2 w-96 h-96 border border-black bg-slate-100">
      <h1 className="flex justify-center font-extrabold text 2xl">useRef</h1>
      <div>
        <button
          className="bg-green-500 p-2 m-2 rounded-sm"
          onClick={() => {
            x = x + 1;
            console.log("x -> " + x);
          }}
        >
          Increase X
        </button>
        <span>Let: {x}</span>
      </div>

      <div>
        <button
          className="bg-green-500 p-2 m-2 rounded-sm"
          onClick={() => {
            setY(y + 1);
            console.log("y -> " + y);
          }}
        >
          Increase Y
        </button>
        <span>State: {y}</span>
      </div>

      <div>
        <button
          className="bg-green-500 p-2 m-2 rounded-sm"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref -> " + ref.current);
          }}
        >
          Increase Ref
        </button>
        <span>Ref: {ref.current}</span>
      </div>
      <button
        className="bg-red-900 p-2 m-2 rounded-sm text-white"
        onClick={() => clearInterval(i.current)}
      >
        Stop Printing
      </button>
    </div>
  );
};

export default DemoUseRef;
