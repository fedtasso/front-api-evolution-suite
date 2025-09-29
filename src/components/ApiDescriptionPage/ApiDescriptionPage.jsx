import { Container, Row } from "react-bootstrap";
import { useVersionApi } from "../../hooks/useVersionApi";



function ApiDescription() {
  const { currentVersionApi, isLoading } = useVersionApi();
  console.log("aaaaaaa", currentVersionApi);
  if (isLoading) {
    return (
      <div className="pt-5 m-4">
        <p>Is loading</p>
      </div>
    );
  } else {
    return (
      <Container fluid>
        <div className="my-5 pt-1 pt-lg-3 m-lg-5">
          <Row className="d-flex justify-content-center">
            <div className="container mt-4 d-flex flex-column justify-content-center">
              <h2 className="section-title text-center mt-1 mb-5">
                {currentVersionApi.title}
              </h2>
              <p className="text-center mb-4 body-text">
                {currentVersionApi.descriptionPage}
              </p>
              {/* Lista de tecnologías */}
              {currentVersionApi.technologies &&
                currentVersionApi.technologies.length > 0 && (
                  <div className="">
                    <div className="tech-pill-container">
                      {currentVersionApi.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              <div className="d-flex justify-content-center"></div>
            </div>
          </Row>
        </div>
      </Container>
    );
  }
}

export default ApiDescription;
