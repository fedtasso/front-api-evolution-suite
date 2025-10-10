import { Button, Col, Container, Row } from "react-bootstrap";
import { useVersionApi } from "../../hooks/useVersionApi";
import "./VersionApiCard.css";
import { API_CONFIG } from "../../config/apiConfig";
import "../Hexagon/Hexagon.css";
import HexagonIterator from "../Hexagon/HexagonIterator";
import { Link } from "react-router-dom";

function VersionApiCard() {
  const { isLoading } = useVersionApi();

  if (isLoading) {
    return (
      <div className="pt-5 m-4">
        <p>Is loading</p>
      </div>
    );
  }

  return (
    <Container>
      {Object.entries(API_CONFIG).map(([key, config], index) => {
        // Saltar la clave 'home'
        if (key === "home") return null;

        // Determinar si el índice es par o impar para alternar
        const isEven = index % 2 === 0;

        return (
          <div key={key} className="pb-4 mx-md-5">
            <Row className="my-3 mx-2 p-5 version-api">
              <Col
                lg={{ span: 4, order: isEven ? 1 : 2 }}
                xs={{ span: 12, order: 1 }}
                className="d-flex justify-content-center mb-4 mb-lg-0"
              >
                <HexagonIterator config={config} />
              </Col>

              {/* Columna del contenido */}
              <Col
                lg={{ span: 8, order: isEven ? 2 : 1 }}
                xs={{ span: 12, order: 2 }}
                className="d-flex justify-content-center"
              >
                <div className="container mt-4 d-flex flex-column justify-content-center">
                  <h2 className="section-title text-center mb-5">
                    {config.title}
                  </h2>
                  <p className="text-center body-text mb-4">
                    {config.descriptionCard}
                  </p>
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="light"
                      size="lg"
                      as={Link}
                      to={`/${key}`}
                      className="text-decoration-none mb-4 mb-lg-0 botton-color "
                    >
                      {" "}
                      Probar Versión
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        );
      })}
    </Container>
  );
}

export default VersionApiCard;
