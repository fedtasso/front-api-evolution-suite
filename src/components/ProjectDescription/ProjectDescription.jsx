import "./ProjectDescription.css";

const ProjectDescription = () => {
  return (
    <section className="project-description-section p-3">
      <div className="custom-shape-divider-top-1758044097">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 text-center">
            {/* Título */}
            <h2 className="section-title mb-4">
              Un Laboratorio de Arquitecturas Backend
            </h2>

            {/* Texto descriptivo */}
            <p className="body-text">
              <span className="text-highlight">API Evolution Suite</span>{" "}
              es un banco de pruebas interactivo donde implemento y comparo 6
              enfoques arquitectónicos distintos para resolver los mismos
              problemas de backend, desde un monolito simple hasta sistemas
              complejos con TypeScript y principios SOLID.
            </p>

            <p className="body-text">
              Explora cada versión, prueba sus endpoints de CRUD y descubre de
              primera mano cómo evolucionan la estructura, la seguridad, el
              testing y la mantenibilidad del código.
            </p>

            {/* Píldoras de tecnología */}
            <div className="tech-pill-container">
              <span className="tech-pill">Node.js</span>
              <span className="tech-pill">TypeScript</span>
              <span className="tech-pill">Architectures</span>
              <span className="tech-pill"></span>
              <span className="tech-pill"></span>
              <span className="tech-pill"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
