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
    title: "API Evolution Suite",
    hexagonImage: logo,
  },
  v1: {
    id: "v1",
    title: "Monolithic Core",
    baseUrl: "http://localhost:3001/api",
    endpoints,
    descriptionHero: "Arquitectura monolítica simple - Todo en un solo archivo para máxima simplicidad y fácil comprensión inicial",
    descriptionPage: "Implementación monolítica donde todas las capas (controladores, lógica de negocio, acceso a datos) coexisten en un mismo código base. Ideal para entender los fundamentos de una API RESTful sin complejidades arquitectónicas.",
    descriptionCard: "Single-file CRUD con estructura lineal. Perfecto para aplicaciones pequeñas y aprendizaje de conceptos básicos de backend.",
    technologies: ["Arquitectura monolítica", "Node.js", "Express", "MySQL", "Single-file structure"],
    hexagonTitle: "Monolithic Core",
    hexagonIcon: "bi-file-earmark-code",
    architecture: "Monolito Simple",
    keyFeatures: ["Single-file structure", "CRUD básico", "Sin separación de capas"]
  },
  v2: {
    id: "v2",
    title: "Modular Nexus",
    baseUrl: "http://localhost:3002/api",
    endpoints,
    descriptionHero: "Arquitectura modular con patrón MVC - Separación clara de responsabilidades y middlewares",
    descriptionPage: "Evolución hacia una estructura modular implementando el patrón Modelo-Vista-Controlador. Incluye middlewares para autenticación, validación y manejo de errores de forma organizada.",
    descriptionCard: "Patrón MVC con middlewares. Mejor organización del código y manejo de responsabilidades separadas.",
    technologies: ["Patrón MVC", "Node.js", "Express", "Bcrypt", "Passport", "Express-validator", "Middlewares"],
    hexagonTitle: "Modular Nexus", 
    hexagonIcon: "bi-layers",
    architecture: "MVC Modular",
    keyFeatures: ["Separación MVC", "Middlewares", "Validación", "Autenticación"]
  },
  v3: {
    id: "v3", 
    title: "Service Core",
    baseUrl: "http://localhost:3003/api",
    endpoints,
    descriptionHero: "Arquitectura por servicios - Lógica de negocio encapsulada en clases servicio",
    descriptionPage: "Implementación con servicios dedicados que encapsulan la lógica de negocio. Incluye autenticación JWT, envío de emails y manejo más profesional de la capa de servicios.",
    descriptionCard: "Servicios con clases y JWT. Mejor testabilidad y separación de responsabilidades empresariales.",
    technologies: ["Service Layer", "Node.js", "JWT", "Nodemailer", "Class-based services", "Joi validation"],
    hexagonTitle: "ServiceCore",
    hexagonIcon: "bi-gear-wide-connected",
    architecture: "Service Layer",
    keyFeatures: ["Service classes", "JWT Auth", "Email service", "Input validation"]
  },
  v4: {
    id: "v4",
    title: "Secure Doc",
    baseUrl: "http://localhost:3004/api", 
    endpoints,
    descriptionHero: "API documentada y testeada - Logger, Swagger y suite de testing completa",
    descriptionPage: "Versión profesional con documentación automática Swagger, logging estructurado con Winston, y suite completa de testing con Jest. Base de datos MongoDB para mayor flexibilidad.",
    descriptionCard: "API documentada con Swagger, logging y testing. Enfoque en calidad y mantenibilidad.",
    technologies: ["Swagger UI", "Winston Logger", "Jest Testing", "MongoDB", "Mongoose", "Helmet security"],
    hexagonTitle: "SecureDoc",
    hexagonIcon: "bi-file-earmark-check",
    architecture: "Documented & Tested",
    keyFeatures: ["Auto-documentación", "Logging", "Testing suite", "Seguridad"]
  },
  v5: {
    id: "v5",
    title: "Solid Core", 
    baseUrl: "http://localhost:3005/api",
    endpoints,
    descriptionHero: "Arquitectura SOLID - Principios de diseño y patrón Repository",
    descriptionPage: "Implementación que sigue los principios SOLID con inyección de dependencias y patrón Repository. Código altamente mantenible, testeable y extensible siguiendo mejores prácticas de diseño.",
    descriptionCard: "Principios SOLID y Repository Pattern. Código limpio y altamente mantenible.",
    technologies: ["SOLID Principles", "Dependency Injection", "Repository Pattern", "Inversify", "Interface segregation"],
    hexagonTitle: "SolidCore",
    hexagonIcon: "bi-puzzle",
    architecture: "SOLID Architecture", 
    keyFeatures: ["Principios SOLID", "Dependency Injection", "Repository Pattern", "Interfaces"]
  },
  v6: {
    id: "v6",
    title: "Type Craft",
    baseUrl: "http://localhost:3006/api",
    endpoints, 
    descriptionHero: "TypeScript y Decorators - Tipado estático y arquitectura moderna con metaprogramación",
    descriptionPage: "Implementación en TypeScript que aprovecha el tipado estático, decoradores para metaprogramación, y TypeORM para un ORM tipado. La evolución más avanzada con todas las ventajas del ecosistema TypeScript.",
    descriptionCard: "TypeScript con decoradores y ORM tipado. Máxima seguridad de tipos y productividad.",
    technologies: ["TypeScript", "Decorators", "TypeORM", "Metadata reflection", "Strict typing", "PostgreSQL"],
    hexagonTitle: "TypeCraft",
    hexagonIcon: "bi-type",
    architecture: "TypeScript First",
    keyFeatures: ["TypeScript", "Decorators", "Type-safe ORM", "Metadata programming"]
  }
};

// export const API_CONFIG = {
//   home: {
//     id: "home",
//     title: "Home",
//     hexagonImage: logo,
//   },
//   v1: {
//     id: "v1",
//     title: "Monolithic Core",
//     baseUrl: "URL a v1",
//     endpoints,
//     descriptionHero:
//       "Descripción Monolitica Descripción Monolitica Descripción Monolitica Descripción Monolitica",
//     descriptionPage:
//       "Descripción Version Monolitica Descripción Version Monolitica Descripción Version Monolitica Descripción Version Monolitica Descripción Version Monolitica ",
//     descriptionCard:
//       "Descripción Version Monolitica Descripción Version Monolitica Descripción Version Monolitica Descripción Version Monolitica Descripción Version Monolitica ",
//     technologies: ["Arquitectura monolítica", "Node.js", "Express", "MySQL"],
//     hexagonTitle: "Monolithic Core",
//     hexagonIcon: "bi-cpu-fill",
//   },
//   v2: {
//     id: "v2",
//     title: "Modular Nexus",
//     baseUrl: "URL a v1",
//     endpoints,
//    descriptionHero:
//       "Descripción Monolitica Descripción Monolitica Descripción Monolitica Descripción Monolitica",
//     descriptionPage:
//       "Descripción Version Monolitica Descripción Version Monolitica Descripción Version Monolitica Descripción Version Monolitica Descripción Version Monolitica ",
//     descriptionCard:
//       "Descripción Version Monolitica Descripción Version Monolitica Descripción Version Monolitica Descripción Version Monolitica Descripción Version Monolitica ",

//     technologies: ["Patrón MVC", "Node.js", "Express", "Bcrypt", "Passport"],
//     hexagonTitle: "Modular Nexus",
//     hexagonIcon: "bi-cpu-fill",
//   },
//   v3: {
//     id: "v3",
//     title: "Sarasa Sasa",
//     baseUrl: "URL a v1",
//     endpoints,
//    descriptionHero:
//       "Descripción Monolitica Descripción Monolitica Descripción Monolitica Descripción Monolitica",
//     descriptionPage:
//       "Descripción Version Monolitica Descripción Version Monolitica Descripción Version Monolitica Descripción Version Monolitica Descripción Version Monolitica ",
//     descriptionCard:
//       "Descripción Version Monolitica Descripción Version Monolitica Descripción Version Monolitica Descripción Version Monolitica Descripción Version Monolitica ",

//     hexagonTitle: "Sarasa Sasa",
//     hexagonIcon: "bi-cpu-fill",
//   },
// };
