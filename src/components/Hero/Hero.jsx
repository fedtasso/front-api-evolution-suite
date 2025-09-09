import { useState } from "react";
import { useVersionApi } from "../../hooks/useVersionApi";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import "./hero.css";

function Hero() {
  const { currentVersionApi, isLoading } = useVersionApi();
  console.log("hero", isLoading);
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
              <h1 className="display-4 fw-bold mb-0">API Evolution Suite</h1>
              <div className="d-flex align-item-center justify-content-center ">
                <div className=" my-5 mx-auto position-relative ">
                  {currentVersionApi?.id !== "home" && (
                    <>
                      <img
                        src="src/assets/images/lineas-hero2.png"
                        alt="Líneas decorativas"
                        className="position-absolute line-image"
                      />
                      <img
                        src="src/assets/images/lineas-hero2.png"
                        alt="Líneas decorativas"
                        className="position-absolute line-image-2"
                      />
                    </>
                  )}
                  <div
                    className={`hexagon d-flex flex-column justify-content-center align-items-center ${currentVersionApi?.id}-bg`}
                  >
                    {currentVersionApi?.id === "home" ? (
                      <img
                        src={currentVersionApi.hexagonImage}
                        alt="Home"
                        className="hexagon-image"
                      />
                    ) : (
                      <div className="hexagon-content">
                        <p className="mx-0 mb-2 text-dark text-hexagon">
                          {currentVersionApi?.hexagonTitle ?? ""}
                        </p>
                        {currentVersionApi?.hexagonIcon && (
                          <i
                            className={`bi ${currentVersionApi.hexagonIcon} fs-2 mb-2 text-dark`}
                          ></i>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <p className="lead">
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
              <div className="d-flex justify-content-between align-items-center p-4">
                <div>
                  <Nav.Link
                    href="https://github.com/fedtasso/front-api-evolution-suite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-1 text-start text-decoration-none hover-text-effect"
                  >
                    GitHub Back
                  </Nav.Link>
                  <Nav.Link
                    href="https://github.com/fedtasso/api-evolution-suite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="m-1 text-start text-decoration-none hover-text-effect"
                  >
                    GitHub Front
                  </Nav.Link>
                </div>
                <div>
                  {currentVersionApi?.id !== "home" && (
                    <Button variant="light" size="lg">
                      Ir al CRUD
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

// agregar lineas al hexagono
// boton de abajo ir al crud ver si lo posiciona absolutamente
// setear bien variables de colores para modificar facilmente
