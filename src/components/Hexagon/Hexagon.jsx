import { useVersionApi } from "../../hooks/useVersionApi";
import lineImage from "../../assets/images/lineas-hero.png";
import "./Hexagon.css"

function Hexagon() {
  const { currentVersionApi, isLoading } = useVersionApi();

  if (isLoading) {
    return (
      <div className="pt-5 m-4">
        <p>Is loading</p>
      </div>
    );
  } else {
    return (
      <div className=" my-5 mx-auto position-relative ">
        {currentVersionApi?.id !== "home" && (
          <>
            <img
              src={lineImage}
              alt="Líneas decorativas"
              className="position-absolute hexagon-exterior-line"
            />
            <img
              src={lineImage}
              alt="Líneas decorativas"
              className="position-absolute hexagon-exterior-line-2"
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
            <div>
              <p className="mx-0 mb-2 hexagon-text text-dark">
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
    );
  }
}


export default Hexagon;