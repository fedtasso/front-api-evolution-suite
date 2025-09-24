import { Button, Col, Container, Row } from "react-bootstrap";
import { useVersionApi } from "../../hooks/useVersionApi";
import "./VersionApiHome.css";
import { API_CONFIG } from "../../config/apiConfig";
import "../Hexagon/Hexagon.css";
import HexagonVersion from "../Hexagon/HexagonVersion";

function VersionApiHome() {
  const { isLoading } = useVersionApi();

  if (isLoading) {
    return (
      <div className="pt-5 m-4">
        <p>Is loading</p>
      </div>
    );
  } else {
    return (
      <Container className="">
        {Object.entries(API_CONFIG).map(([key, config], index) => {
          // Saltar la clave 'home'
          if (key === "home") return null;

          // Determinar si el índice es par o impar para alternar
          const isEven = index % 2 === 0;

          return (
            <div key={key} className="pb-4 mx-5">
              <Row className="my-3 mx-2 p-5 version-api">
                
                {isEven ? (
                  <HexagonVersion config={config}></HexagonVersion>
                ) : null}

                {/* Columna del contenido */}
                <Col lg={8} className="d-flex justify-content-center">
                  <div className="container mt-4 d-flex flex-column justify-content-center">
                    <h2 className="section-title text-center mb-5">
                      {config.title}
                    </h2>
                    <p className="text-center mb-4">{config.description}</p>
                    {/* Lista de tecnologías
                    {config.technologies && config.technologies.length > 0 && (
                      <div className="">
                        <div className="tech-pill-container">
                          {config.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-pill">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )} */}
                    <div className="d-flex justify-content-center">
                      <Button
                        variant="light"
                        size="lg"
                        href="https://github.com/fedtasso/api-evolution-suite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none mb-4 mb-lg-0"
                      >
                        {" "}
                        Ir al CRUD
                      </Button>
                    </div>
                  </div>
                </Col>

                {/* Columna del hexágono - Derecha para índices impares */}
                {!isEven ? (
                  <HexagonVersion config={config}></HexagonVersion>
                ) : null}
              </Row>
            </div>
          );
        })}
      </Container>
    );
  }
}

export default VersionApiHome;
