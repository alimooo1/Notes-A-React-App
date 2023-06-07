import React, { useState, useEffect } from "react";
import MyButton from "../Shared/MyButton/MyButton";
import "./Header.css";
import "./dark-mode.css";

function Header() {
  let [isLight, setIsLight] = useState(false);

  const darkModeHandler = (isLight : boolean) => {
    document.querySelector("body")!.classList.toggle("dark");
    setIsLight(!isLight);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsLight(true);
      document.querySelector("body")!.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isLight ? "dark" : "light");
  }, [isLight]);

  return (
    <div className="Header">
      <span>Notes</span>
      <MyButton
        title={isLight ? "Light Mode" : "Dark Mode"}
        click={() => darkModeHandler(isLight)}
      />
    </div>
  );
}

export default Header;
