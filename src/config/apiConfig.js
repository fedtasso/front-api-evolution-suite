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
  v1: {
    id: "v1",
    title: "Monolithic Core",
    baseUrl: "URL a v1",
    endpoints,
  },
  v2: {
    id: "v2",
    title: "Modular Nexus",
    baseUrl: "URL a v2",
    endpoints,
  },
};
