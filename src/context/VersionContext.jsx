import { createContext, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { API_CONFIG } from "../config/apiConfig";

export const VersionApiContext = createContext();

const getVersionKeyFromPath = (pathname) => {
  const pathParts = pathname.split("/").filter(Boolean);
  return pathParts[0] || null;
};

export const VersionProvider = ({ children }) => {
  const [currentVersionApi, setCurrentVersionApi] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const params = useParams();
  const [error, setError] = useState(null);

  // cargar version desde el path
  const versionKey = getVersionKeyFromPath(location.pathname);

  // Cargar configuración de la API seleccionada
  useEffect(() => {
    const loadApiConfig = async () => {
      setIsLoading(true);
      try {
        const versionConfig = API_CONFIG[versionKey];
        setCurrentVersionApi(versionConfig || null);
        setError(null);
      } catch (err) {
        setError(
          `Error cargando la API ${versionConfig.title}: ${err.message}`
        );
        setCurrentVersionApi(null);
      } finally {
        setIsLoading(false);
      }
    };
    if (versionKey) loadApiConfig();
    else setCurrentVersionApi(null);
  }, [versionKey]);

  // Método dinámico para llamadas API
  const callApi = async (
    endpointKey,
    { body = {}, method = "POST", headers = {}, params = {} } = {}
  ) => {
    if (!currentVersionApi) throw new Error("No API version selected");

    const endpoint = currentVersionApi.endpoints[endpointKey];

    let url = `${currentVersionApi.baseUrl}${endpoint.path}`;

    // Reemplazar parámetros dinámicos en la URL
    Object.keys(params).forEach((key) => {
      url = url.replace(`:${key}`, params[key]);
    });

    if (url.includes(":/")) {
      throw new Error(`Faltan parámetros en la URL: ${url}`);
    }

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: method !== "GET" ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "API request failed");
    }

    return response.json();
  };

  return (
    <VersionApiContext.Provider
      value={{ versionApi, setVersionApi, isLoading, callApi }}
    >
      {children}
    </VersionApiContext.Provider>
  );
};

// Uso de callApi
// // Ejemplo 1: Llamada simple
// await callApi('login', {
//   body: { username: 'ana', password: '123' }
// });

// // Ejemplo 2: Llamada con todos los parámetros
// await callApi('updateUser', {
//   body: { name: 'Ana García' },
//   method: 'PUT',
//   headers: { 'Authorization': 'token123' },
//   params: { userId: 123 }
// });

// // Ejemplo 3: Llamada sin segundo parámetro
// await callApi('getUsers'); // ← Usa todos los valores por defecto
