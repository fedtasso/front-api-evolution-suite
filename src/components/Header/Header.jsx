import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import logo from "../../assets/logo.png";

function Header() {
  const { user, authorized, isLoading, logout } = useAuth();

  if (isLoading) return <div></div>;

  return (
    <Navbar expand="lg" className="bg-light" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            width="auto"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="flex-column flex-lg-row align-items-end align-items-lg-center justify-content-center">
            {authorized ? (
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
                  title={<i className="bi bi-person-circle fs-3 m-1 "></i>}
                  id="user-dropdown"
                  align="end"
                  className="text-end mx-3"
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
            ) : (
              <>
                <Nav.Item className="w-100 px-2 mb-2 mb-lg-0 d-flex justify-content-end">
                  <Button
                    as={Link}
                    to="/login"
                    variant="dark"
                    className="d-flex  justify-content-center"
                  >
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    Login
                  </Button>
                </Nav.Item>
                <Nav.Item className="w-100 px-2 mb-2 mb-lg-0 d-flex justify-content-end">
                  <Button
                    as={Link}
                    to="/register"
                    variant="dark"
                    className="d-flex justify-content-center"
                  >
                    <i className="bi bi-person-plus me-2"></i>
                    Registrarse
                  </Button>
                </Nav.Item>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
