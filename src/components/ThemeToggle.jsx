import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import "./ThemeToggle.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span className={theme === "light" ? "active" : ""}>
        <Sun size={15} />
      </span>

      <span className={theme === "dark" ? "active" : ""}>
        <Moon size={15} />
      </span>
    </button>
  );
}

export default ThemeToggle;