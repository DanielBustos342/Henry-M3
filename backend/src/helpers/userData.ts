import IPreloadUser from "../interfaces/IPreloadUser";

export const preloadUsers: IPreloadUser[] = [
  {
    photo: "https://example.com/photos/daniel.jpg",
    name: "Daniel Esteban",
    lastname: "Bustos",
    email: "daniel-bustos@mail.com",
    password: "securePassword123",
    birthdate: new Date("1991-12-03"),
    nDni: 35921143,
  },
  {
    photo: "https://example.com/photos/lilen.jpg",
    name: "Lilen Wara Anahi",
    lastname: "Laguna",
    email: "lilen-laguna@mail.com",
    password: "securePassword456",
    birthdate: new Date("1990-09-27"),
    nDni: 35479821,
  },
  {
    photo: "https://example.com/photos/gustavo.jpg",
    name: "Gustavo Cesar",
    lastname: "Bustos",
    email: "gustavo-bustos@mail.com",
    password: "securePassword789",
    birthdate: new Date("1963-06-26"),
    nDni: 16526149,
  },
  {
    photo: "https://example.com/photos/gladys.jpg",
    name: "Gladys Estela Del Valle",
    lastname: "Chavarria",
    email: "gladys-chavarria@mail.com",
    password: "securePassword321",
    birthdate: new Date("1968-05-20"),
    nDni: 20163131,
  },
];
