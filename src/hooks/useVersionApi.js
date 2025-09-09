import { useContext } from "react";
import { VersionApiContext } from "../context/VersionApiContext";


export const useVersionApi = () => {
  const context = useContext(VersionApiContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};