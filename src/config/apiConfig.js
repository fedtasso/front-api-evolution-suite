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
    hexagonImage: logo,
  },
  v1: {
    id: "v1",
    title: "Monolithic Core",
    baseUrl: "URL a v1",
    endpoints,
    description:
      "Descripción Monolitica Descripción Monolitica Descripción Monolitica Descripción Monolitica Descripción Monolitica ",
    technologies: ["Arquitectura monolítica", "Node.js", "Express", "MySQL"],
    hexagonTitle: "Monolithic Core",
    hexagonIcon: "bi-cpu-fill",
  },
  v2: {
    id: "v2",
    title: "Modular Nexus",
    baseUrl: "URL a v1",
    endpoints,
    description:
      "Descripción Modular Descripción Monolitica Descripción Monolitica Descripción Monolitica Descripción Monolitica ",
    technologies: ["Patrón MVC", "Node.js", "Express", "Bcrypt", "Passport"],
    hexagonTitle: "Modular Nexus",
    hexagonIcon: "bi-cpu-fill",
  },
  v3: {
    id: "v3",
    title: "Sarasa Sasa",
    baseUrl: "URL a v1",
    endpoints,
    description:
      "Descripción Sarasa sasa Descripción Monolitica Descripción Monolitica Descripción Monolitica Descripción Monolitica ",
    hexagonTitle: "Sarasa Sasa",
    hexagonIcon: "bi-cpu-fill",
  },
};
