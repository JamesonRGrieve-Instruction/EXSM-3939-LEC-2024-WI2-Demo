import React, { useState } from "react";
export default function StateChanger() {
  const [state, setState] = useState(false);
  const [shown, setShown] = useState(true);

  return (
    <>
      {shown && <h1>State: {state ? "Changed" : "Original"}</h1>}
      {/*shown ? <h1>State: {state ? "Changed" : "Original"}</h1> : null*/}
      <button
        onClick={(event) => {
          event.preventDefault();
          setState((previous) => !previous);
        }}
      >
        Change State
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          setShown((previous) => !previous);
        }}
      >
        Show/Hide Text
      </button>
    </>
  );
}
