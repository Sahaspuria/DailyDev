import React, { useEffect, useRef, useState } from "react";

const HooksPractice = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());
  const inputRef = useRef(null);
  /*
  Dependency Array of useEffect work as follows:
  []: only render once,
  [a, b]: render when a or b value changes
  nothing means, it will run on every re-render (try to avoid, else your app will have unneccesary renders)
  */

  useEffect(() => {
    inputRef.current.focus();
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  /*using UseRef we have created the ref and attached to input (ref attribute) and 
  under useeffect we called the focus() method.
  */

  return (
    <>
      <h1>Hooks Test, UseState, UseEffect, UseRef</h1>
      <div className="useEffect-Timer-container">
        <h2>UseEffect Timer</h2>
        <p>{time.toLocaleTimeString()}</p>
      </div>
      <div className="useState-container">
        <h2>UseState Counter</h2>
        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >{`You Clicked me ${count} times`}</button>
      </div>
      <div className="useRef-input-container">
        <h2>UseRef input Container</h2>
        <input
          ref={inputRef}
          type="text"
          value={""}
          placeholder="input get's focused on load"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default HooksPractice;
