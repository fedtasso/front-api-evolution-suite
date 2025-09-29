import ShapeDivider from "../ShapeDivider/ShapeDivider";
import "./ProjectDescription.css";

const ProjectDescription = () => {
  return (
    <section className="project-description-section p-3">
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 text-center pt-md-5">
            {/* Título */}
            <h2 className="section-title my-4">
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
