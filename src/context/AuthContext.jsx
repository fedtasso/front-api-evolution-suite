import { createContext, useContext, useState } from "react";
import { VersionApiContext } from "./VersionApiContext";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authorized, setAuthorized] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { callApi } = useContext(VersionApiContext);

  // ----------------------LOGIN-------------------------//
  const login = async (formData) => {
    setIsLoading(true);

    try {
      const data = await callApi("login", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      setUser(data.user);
      setIsAdmin(data.role === "admin");
      setAuthorized(true)
      return { success: true, message: 'Sesión iniciada exitosamente' };

    } catch (error) {
      console.error(error.message);
      return {
        success: false,
        message: "Error al iniciar sesión",
        technicalMessage: error.message,
      };
    } finally {
      setIsLoading(false);
    }
  };

  // ----------------------LOGOUT-------------------------//
  const logout = async () => {
    try {
      await callApi('logout', {
        method: "POST",
        credentials: "include",
      });

      setUser(null);
      setIsAdmin(false);
      setAuthorized(false)
      return { success: true, message: 'Sesión cerrada exitosamente' }
    } catch (error) {
      console.error(error.message);
      return {
        success: false,
        message: "Error al cerrar sesión",
        technicalMessage: error.message,
      };
    }
  };

  // ----------------------REGISTER-------------------------//
  const register = async (formData) => {
    setIsLoading(true);

    try {
      const data = await callApi("createUser", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      setUser(data.user);
      setIsAdmin(data.role === "admin");
      return { success: true, message: 'Usuario registrado exitosamente' };

    } catch (error) {
      console.error(error.message);
      return {
        success: false,
        message: "Error al registrar usuario",
        technicalMessage: error.message,
      };
    } finally {
      setIsLoading(false);
    }
  };

  // ----------------------UPDATE-------------------------//
  const updateUser = async (formData) => {
    setIsLoading(true);

    try {
      const data = await callApi("updateUser", {
        method: "PUT",
        body: formData,
        credentials: "include",
      });

      setUser(data.user);
      setIsAdmin(data.role === "admin");
      setAuthorized(true)
      return { success: true, message: 'Usuario actualizado exitosamente' };

    } catch (error) {
      console.error(error.message);
      return {
        success: false,
        message: "Error al actualizar usuario",
        technicalMessage: error.message,
      };
    } finally {
      setIsLoading(false);
    }
  };
  // ----------------------DELETE-------------------------//
  // ----------------------GET USER BY ID-------------------------//
  // ----------------------GET USER BY EMAIL-------------------------//

  return (
    <AuthContext.Provider value={{ user, isAdmin, isLoading, authorized, login, logout, register, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
