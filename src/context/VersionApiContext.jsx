import { createContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { API_CONFIG } from "../config/apiConfig";

export const VersionApiContext = createContext();

const getVersionKeyFromPath = (pathname) => {
  const pathParts = pathname.split("/").filter(Boolean);
  return pathParts[0] || null;
};

export const VersionApiProvider = ({ children }) => {
  const [currentVersionApi, setCurrentVersionApi] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const [error, setError] = useState(null);

  
  // cargar version desde el path
  const versionKey = getVersionKeyFromPath(location.pathname);

  
  // Cargar configuración de la API seleccionada
  useEffect(() => {
    const loadApiConfig = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const versionConfig = API_CONFIG[versionKey];
        console.log("version", versionConfig)
        
        if (!versionConfig) {
          throw new Error(`Versión de API no encontrada: ${versionKey}`);
        }
        setCurrentVersionApi(versionConfig || null);
      } catch (error) {
        setError({
          message: `Error cargando configuración de API`,
          details: error.message,
          versionKey: versionKey,
        });
        setCurrentVersionApi(null);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (versionKey) loadApiConfig();
    else setCurrentVersionApi(null);
  }, [versionKey]);
  console.log(currentVersionApi)
  
  // Método dinámico para llamadas API
  const callApi = async (
    endpointKey,
    {
      body = {},
      method = "POST",
      headers = {},
      params = {},
      credentials = "omit",
    } = {}
  ) => {
    if (!currentVersionApi) throw new Error("No API version selected");

    const endpoint = currentVersionApi.endpoints[endpointKey];

    if (!endpoint) {
      throw new Error(`Endpoint no encontrado: ${endpointKey}`);
    }
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
      credentials,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "API request failed");
    }

    return response.json();
  };

  return (
    <VersionApiContext.Provider
      value={{
        currentVersionApi,
        setCurrentVersionApi,
        error,
        isLoading,
        callApi,
      }}
    >
      {children}
    </VersionApiContext.Provider>
  );
};

// // Uso de callApi
// // Ejemplo 1: Llamada simple
// await callApi("login", {
//   body: { username: "ana", password: "123" },
// });

// // Ejemplo 2: Llamada con todos los parámetros
// await callApi("updateUser", {
//   body: { name: "Ana García" },
//   method: "PUT",
//   headers: { Authorization: "token123" },
//   params: { userId: 123 },
// });

// // Ejemplo 3: Llamada sin segundo parámetro
// await callApi("getUsers"); // ← Usa todos los valores por defecto
