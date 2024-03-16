import React, { useState } from "react";
export default function StateChanger() {
  const [state, setState] = useState(false);
  return (
    <>
      <h1>State: {state ? "Changed" : "Original"}</h1>
      <button
        onClick={(event) => {
          event.preventDefault();
          setState((previous) => !previous);
        }}
      >
        Change State
      </button>
    </>
  );
}
