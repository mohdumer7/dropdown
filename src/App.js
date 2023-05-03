import { useState } from "react";
import "./App.css";

function App() {
  const [selected, setSelected] = useState("Hello");
  const [show, setshow] = useState();

  const hovered = () => {
    setshow(true);
  };
  const nonhovered = () => {
    setshow(false);
  };

  const clicked = (val) => {
    setshow(false);
    setSelected(val);
  };

  return (
    <div className="w-full h-full bg-slate-300 app">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-slate-600 mt-10 text-5xl ">DROPDOWN</h1>
        <select
          className=" mt-10 transition"
          onMouseEnter={hovered}
          onMouseLeave={nonhovered}
        >
          <option className="w-[20px]">{selected}</option>
        </select>
        <div className="bg-white w-[200px] text-center">
          {show && (
            <div>
              <p
                onMouseEnter={hovered}
                onMouseLeave={nonhovered}
                onClick={() => clicked("Hello")}
                className="hover:bg-slate-300 cursor-pointer"
              >
                Hello
              </p>
              <p
                onMouseEnter={hovered}
                onMouseLeave={nonhovered}
                onClick={() => clicked("Hi")}
                className="hover:bg-slate-300 cursor-pointer"
              >
                Hi
              </p>
              <p
                onMouseEnter={hovered}
                onMouseLeave={nonhovered}
                onClick={() => clicked("Bye")}
                className="hover:bg-slate-300 cursor-pointer"
              >
                Bye
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
