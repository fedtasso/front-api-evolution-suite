import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          {/* Columna izquierda - Proyecto educativo */}
          <Col lg={4} className="text-center text-lg-start mb-3 mb-lg-0">
            <h6 className="footer-title">API Evolution Suite</h6>
            <p className="footer-subtitle mb-0">
              Proyecto educativo · © {currentYear}
            </p>
            <p className="footer-author small text-muted">
              Federico Tasso
            </p>
          </Col>

          {/* Columna central - Navegación */}
          <Col lg={4} className="text-center mb-3 mb-lg-0">
            <div className="footer-links">
              <Link to="/" className="footer-link me-3">
                Inicio
              </Link>
              <Link to="/how-it-works" className="footer-link me-3">
                Cómo Funciona
              </Link>
              <Link to="/comparison" className="footer-link">
                Comparación
              </Link>
            </div>
          </Col>

          {/* Columna derecha - Enlaces externos */}
          <Col lg={4} className="text-center text-lg-end">
            <div className="footer-external-links">
              <a 
                href="https://github.com/fedtasso/api-evolution-suite" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-external-link me-3"
              >
                <i className="bi bi-github me-1"></i>
                GitHub Back
              </a>
              <a 
                href="https://github.com/fedtasso/front-api-evolution-suite" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-external-link me-3"
              >
                <i className="bi bi-github me-1"></i>
                GitHub Front
              </a>
              <a 
                href="https://linkedin.com/in/fedetasso" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-external-link"
              >
                <i className="bi bi-linkedin me-1"></i>
                LinkedIn
              </a>
            </div>
          </Col>
        </Row>
        
        {/* Línea separadora y documentación */}
        <Row className="mt-3 pt-3 border-top border-secondary">
          <Col className="text-center">
            <small className="text-muted">
              <a 
                href="/documentation" 
                className="text-muted text-decoration-none"
              >
                📚 Documentación técnica
              </a>
              {' · '}
              <a 
                href="/api-docs" 
                className="text-muted text-decoration-none"
              >
                🔍 API Documentation
              </a>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;