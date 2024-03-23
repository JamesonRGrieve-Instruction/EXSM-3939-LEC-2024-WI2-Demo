"use client";
import React, { useState } from "react";
import CountTracker from "./CountTracker";
export default function Home() {
  const [showTracker, setShowTracker] = useState(true);
  return (
    <>
      {showTracker && <CountTracker />}
      <button
        onClick={() => {
          setShowTracker((previous) => !previous);
        }}
      >
        Toggle Tracker
      </button>
    </>
  );
}
