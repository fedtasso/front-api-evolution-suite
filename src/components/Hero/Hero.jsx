import { useVersionApi } from "../../hooks/useVersionApi";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import "./hero.css";
import HexagonUrl from "../Hexagon/HexagonUrl";
import ShapeDivider from "../ShapeDivider/ShapeDivider";

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
        className="px-0 hero d-flex flex-column justify-content-between position-relative"
      >
        {/* title & subtitle */}
        <div className="d-flex align-items-center justify-content-center flex-grow-1 ">
          <Row className="w-100">
            <Col
              lg={12}
              className="text-center d-flex flex-column justify-content-center"
            >
              <h1 className="hero-title mb-0 ">{currentVersionApi?.title || "API Evolution Suite"}</h1>
              <div className="d-flex align-item-center justify-content-center ">
                <HexagonUrl></HexagonUrl>
              </div>
              <p className="highlight-text px-lg-5 mx-lg-3">
                {currentVersionApi?.descriptionHero ??
                  "Un viaje interactivo por la evolución de las arquitecturas backend"}
              </p>
            </Col>
          </Row>
        </div>

        {/* Botons */}
        <div className="pb-3">
          <Row className="m-0">
            <Col lg={12} className="text-center ">
              <div className="d-flex justify-content-center align-items-center py-3 px-5">
                <div className="d-flex max-width w-100 flex-column flex-md-row align-items-center justify-content-md-between gap-3">
                  <div className="d-flex justify-content-start gap-2 gap-md-0">
                    <Button
                      variant="light"
                      size="lg"
                      href="https://github.com/fedtasso/api-evolution-suite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <i className="bi bi-github me-1"></i>
                      GitHub Back
                    </Button>
                    <Button
                      variant="light"
                      size="lg"
                      href="https://github.com/fedtasso/front-api-evolution-suite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-2 ms-md-4  text-decoration-none "
                    >
                      <i className="bi bi-github me-1"></i>
                      GitHub Front
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <ShapeDivider></ShapeDivider>
      </Container>
    );
  }
}

export default Hero;
