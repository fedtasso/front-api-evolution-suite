import { Col } from "react-bootstrap";
import "./Hexagon.css"

function HexagonIterator ({config}) {
    return (
        <Col lg={4} className="d-flex justify-content-center align-items-center">
                    <div className="d-flex position-relative">
                      <div className="hexagon2 position-absolute"></div>
                      <div
                        className={`hexagon d-flex flex-column justify-content-center align-items-center ${config.id}-bg`}
                      >
                        <p className="mx-0 mb-2 hexagon-text text-dark">
                          {config?.hexagonTitle ?? ""}
                        </p>
                        {config?.hexagonIcon && (
                          <i
                            className={`bi ${config.hexagonIcon} fs-2 mb-2 text-dark`}
                          ></i>
                        )}
                      </div>
                    </div>
                  </Col>
    )
}

export default HexagonIterator;