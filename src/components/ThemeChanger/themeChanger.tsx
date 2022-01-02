import { useState } from "react";
import "./theme-changer.scss";
import { ReactComponent as MoonSVG } from "@src/assets/emojis/moon.svg";
import { ReactComponent as SunSVG } from "@src/assets/emojis/sun.svg";

const ThemeChanger = () => {
  const [theme, setTheme] = useState("dark");

  function changeTheme() {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  }

  return (
    <button className="theme-changer" onClick={changeTheme}>
      {theme === "dark" && <MoonSVG />}
      {theme === "light" && <SunSVG />}
    </button>
  );
};

export default ThemeChanger;
