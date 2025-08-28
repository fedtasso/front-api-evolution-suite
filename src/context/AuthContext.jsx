import { createContext, useState } from "react";

export const AuthContext = createContext();

const API_URL = "version de api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [autorized, setAutorized] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // ----------------------LOGIN-------------------------//
  const login = async (credentials) => {
    setIsLoading(true);

    try {
      //verificar usuario por email
      const response = await fetch(`${API_URL}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.JSON();
        setUser(data.user);
        setIsAdmin(data.role === "admin");
        return { success: true };
      }
    } catch (error) {
      console.error("Error en la conexión");
      return { success: false, message: "Error en la conexión al hacer login" };
    } finally {
      setIsLoading(false);
    }
  };

  // ----------------------LOGIN-------------------------//
  const logout = async () => {
    try {
      await fetch(`${API_URL}/user/logout`, {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
      setIsAdmin(false);
    } catch (error) {
      console.error("Error en logout:", error);
    }
  };

  // ----------------------REGISTER-------------------------//
  // ----------------------UPDATE-------------------------//
  // ----------------------DELETE-------------------------//
  
  return (
    <AuthContext.Provider value={{ user, isAdmin, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
