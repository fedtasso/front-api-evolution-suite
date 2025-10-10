import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import logo from "../../assets/images/logo.png";
import "./Header.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { API_CONFIG } from "../../config/apiConfig";
import { useVersionApi } from "../../hooks/useVersionApi";

function Header() {
  const { user, authorized, isLoading, logout } = useAuth();
  const { currentVersionApi } = useVersionApi();

  const scrollToForm = () => {
    const formElement = document.getElementById("register-form");
    if (formElement) {
      formElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (isLoading) return <div></div>;

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="text-color-header custom-navbar-border"
    >
      <Container fluid className="p-0">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            width="auto"
            height="40"
            className="d-inline-block align-top mx-2 p-1 bg-logo rounded-1"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="me-2 border-0 nav-color-inverter"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {currentVersionApi?.id != "home" && !authorized && (
            <div className="d-flex flex-column flex-lg-row">
              <Nav.Item className="w-100 px-2 mb-2 mb-lg-0 d-flex justify-content-end">
                <Button
                  as={Link}
                  to="/login"
                  variant="dark" // TO DO color de texto y fondo
                  className="d-flex justify-content-center botton-color"
                >
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  Login
                </Button>
              </Nav.Item>
              <Nav.Item className="w-100 px-2 mb-2 mb-lg-0 d-flex justify-content-end">
                <Button
                  as={Link}
                  variant="dark" // TO DO color de texto y fondo
                  className="d-flex justify-content-center botton-color"
                  onClick={scrollToForm}
                >
                  <i className="bi bi-person-plus me-2"></i>
                  Registrarse
                </Button>
              </Nav.Item>
            </div>
          )}
          <Nav className="flex-column flex-lg-row align-items-end align-items-lg-center justify-content-center">
            <NavDropdown
              title="Version Api"
              id="user-dropdown"
              align="end"
              className="header-text mx-3 "
              container="body"
            >
              {Object.entries(API_CONFIG).map(([key, config], index) => {
                // Saltar la clave 'home'
                if (key === "home") return null;
                return (
                  <div key={key}>
                    <NavDropdown.Item
                      as={Link}
                      to={`/${key}`}
                      className="c-primary "
                    >
                      {config.title}
                    </NavDropdown.Item>
                    {index < Object.keys(API_CONFIG).length - 1 ? (
                      <NavDropdown.Divider />
                    ) : null}
                  </div>
                );
              })}
            </NavDropdown>

            <div className="me-3">
              <ThemeToggle />
            </div>

            {authorized && (
              <>
                {/* <Nav className="d-flex align-items-end">
                  <Nav.Link
                    as={Link}
                    to="/"
                    href="#link"
                    className={`fw-bold border border-dark border-3 rounded px-2`}
                  >
                    Boton 1
                  </Nav.Link>
                </Nav> */}

                <div className="d-flex align-items-center h-100">
                  <p className="m-0">
                    <strong>Hola {user?.name || "Usuario"}</strong>
                  </p>
                </div>
                <NavDropdown
                  title={
                    <i className="bi bi-person-circle fs-3 m-1 text-color-header"></i>
                  }
                  id="user-dropdown"
                  align="end"
                  className="text-end mx-3 "
                >
                  <NavDropdown.Item></NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/profile">
                    Mi cuenta
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout}>
                    <div className="d-flex align-items-center text-danger">
                      <i className="bi bi-box-arrow-right me-2"></i>
                      Cerrar sesión
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
