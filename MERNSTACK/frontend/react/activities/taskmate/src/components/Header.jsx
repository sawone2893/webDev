import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import "./Header.css";

export const Header = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);
  return (
    <header className="Header">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span
          onClick={() => setTheme("light")}
          className={theme == "light" ? "light" : "light activeTheme"}
        ></span>
        <span
          onClick={() => setTheme("medium")}
          className={theme == "medium" ? "medium" : "medium activeTheme"}
        ></span>
        <span
          onClick={() => setTheme("dark")}
          className={theme == "dark" ? "dark" : "dark activeTheme"}
        ></span>
        <span
          onClick={() => setTheme("gOne")}
          className={theme == "gOne" ? "gOne" : "gOne activeTheme"}
        ></span>
        <span
          onClick={() => setTheme("gTwo")}
          className={theme == "gTwo" ? "gTwo" : "gTwo activeTheme"}
        ></span>
        <span
          onClick={() => setTheme("gThree")}
          className={theme == "gThree" ? "gThree" : "gThree activeTheme"}
        ></span>
      </div>
    </header>
  );
};
