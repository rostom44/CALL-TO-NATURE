import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="head">
      <div className="scroll_box">
        <div className="scrolling-text">
          <h2>
            NATURE NATURE NATURE NATURE NATURE NATURE NATURE NATURE NATURE
            NATURE NATURE NATURE NATURE NATURE
          </h2>
        </div>
      </div>
      <img
        className="logo"
        src="..\src\assets\logo.png"
        alt="call to Nature logo"
      />
      <h1 className="title">Call to Nature</h1>
    </div>
  );
}
