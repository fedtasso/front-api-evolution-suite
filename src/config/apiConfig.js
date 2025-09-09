import logo from "../assets/images/logo.png";

const endpoints = {
  login: { path: "/auth/login", method: "POST" },
  logout: { path: "/auth/logout", method: "POST" },
  createUser: { path: "/users", method: "POST" },
  updateUser: { path: "/users/:id", method: "PUT" },
  deleteUser: { path: "/users/:id", method: "DELETE" },
  getUserById: { path: "/users/:id", method: "GET" },
  getUserByEmail: { path: "/users", method: "GET" }, // await callApi('getUserByEmail', {  params: { email: 'ana@email.com' }});
};

export const API_CONFIG = {
  home: {
    id: "home",
    title: "Home",
    hexagonImage: logo
  },
  v1: {
    id: "v1",
    title: "Monolithic Core",
    baseUrl: "URL a v1",
    endpoints,
    description: "descripción monolitica",
    hexagonTitle: "Monolithic Core",
    hexagonIcon: "bi-cpu-fill"
  },
  v2: {
    id: "v2",
    title: "Modular Nexus",
    baseUrl: "URL a v2",
    endpoints,
  },
};
