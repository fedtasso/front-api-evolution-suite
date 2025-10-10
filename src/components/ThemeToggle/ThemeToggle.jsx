import { useTheme } from "../../context/ThemeContext";
import { Button } from "react-bootstrap";

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      variant="outline-secondary"
      onClick={toggleTheme}
      className="d-flex align-items-center my-2 my-lg-0"
    >
      <i className={`bi ${isDark ? "bi-sun" : "bi-moon"} me-1`}></i>
    </Button>
  );
}

export default ThemeToggle;