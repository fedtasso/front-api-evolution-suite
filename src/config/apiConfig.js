export const API_CONFIG = {
  v1: {
    id: "v1",
    title: "Monolithic Core",
    baseUrl: "URL a v1",
    endpoints: {
      login: { path: "/auth/login", method: "POST" },
      getUser: { path: "/users/:id", method: "GET" },
      createUser: { path: "/users", method: "POST" },
      readUser: { path: "/users/:id", method: "GET" },
      updateUser: { path: "/users/:id", method: "PUT" },
      deleteUser: { path: "/users/:id", method: "DELETE" },
    },
  },
};
