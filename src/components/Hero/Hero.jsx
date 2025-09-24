import { useVersionApi } from "../../hooks/useVersionApi";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import "./hero.css";
import Hexagon from "../Hexagon/Hexagon";

function Hero() {
  const { currentVersionApi, isLoading } = useVersionApi();

  if (isLoading) {
    return (
      <div className="pt-5 m-4">
        <p>Is loading</p>
      </div>
    );
  } else {
    return (
      <Container
        fluid
        className="px-0 hero vh-100 d-flex flex-column justify-content-between"
      >
        {/* title & subtitle */}
        <div className="d-flex align-items-center justify-content-center flex-grow-1 ">
          <Row className="w-100">
            <Col
              lg={12}
              className="text-center d-flex flex-column justify-content-center"
            >
              <h1 className="hero-title mb-0 ">API Evolution Suite</h1>
              <div className="d-flex align-item-center justify-content-center ">
                <Hexagon></Hexagon>
              </div>
              <p className="body-text">
                {currentVersionApi?.description ??
                  "Un viaje interactivo por la evolución de las arquitecturas backend"}
              </p>
            </Col>
          </Row>
        </div>

        {/* Botons */}
        <div className="pb-3">
          <Row className="m-0">
            <Col lg={12} className="text-center">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3">
                <div className="d-flex mb-2">
                  <Button
                    variant="light"
                    size="lg"
                    href="https://github.com/fedtasso/api-evolution-suite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    GitHub Back
                  </Button>
                  <Button
                    variant="light"
                    size="lg"
                    href="https://github.com/fedtasso/front-api-evolution-suite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ms-2 ms-md-4  text-decoration-none"
                  >
                    GitHub Front
                  </Button>
                </div>
                <div>
                  {currentVersionApi?.id !== "home" && (
                    <Button variant="light" size="lg" className="ms-2">
                      CRUD
                    </Button>
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default Hero;
