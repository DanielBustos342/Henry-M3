import IAppointment from "../interfaces/IAppointment";

const appointments: IAppointment[] = [
  {
    id: 1,
    date: new Date("2024-12-10"),
    time: new Date("2024-12-10T10:30:00"),
    userId: {
      id: 1,
      photo: "user1.jpg",
      name: "Sofía García",
      email: "sofia.garcia@example.com",
      birthdate: new Date("1990-05-12"),
      nDni: 12345678,
      location: [{ domicilio: "Calle Falsa 123", address: "Madrid, España" }],
      credentialsId: {
        id: 1,
        username: "sofiagarcia",
        password: "password123",
        rol: "user",
        createdAt: new Date("2023-01-01"),
        updatedAt: new Date("2023-06-01"),
        isVeridied: true,
      },
    },
    status: true,
  },
  {
    id: 2,
    date: new Date("2024-12-15"),
    time: new Date("2024-12-15T14:00:00"),
    userId: {
      id: 2,
      photo: "user2.jpg",
      name: "Juan Pérez",
      email: "juan.perez@example.com",
      birthdate: new Date("1985-08-23"),
      nDni: 23456789,
      location: [{ domicilio: "Av. Siempre Viva 742", address: "Lima, Perú" }],
      credentialsId: {
        id: 2,
        username: "juanperez",
        password: "securePass456",
        rol: "admin",
        createdAt: new Date("2022-12-15"),
        updatedAt: new Date("2023-08-01"),
        isVeridied: true,
      },
    },
    status: true,
  },
  {
    id: 3,
    date: new Date("2024-12-20"),
    time: new Date("2024-12-20T16:00:00"),
    userId: {
      id: 3,
      photo: "user3.jpg",
      name: "Ana Torres",
      email: "ana.torres@example.com",
      birthdate: new Date("1992-11-04"),
      nDni: 34567890,
      location: [
        { domicilio: "Rua da Felicidade 85", address: "Lisboa, Portugal" },
      ],
      credentialsId: {
        id: 3,
        username: "anatorres",
        password: "mypassword789",
        rol: "user",
        createdAt: new Date("2023-03-20"),
        updatedAt: new Date("2023-09-15"),
        isVeridied: false,
      },
    },
    status: false,
  },
  {
    id: 4,
    date: new Date("2024-12-25"),
    time: new Date("2024-12-25T09:00:00"),
    userId: {
      id: 4,
      photo: "user4.jpg",
      name: "Carlos López",
      email: "carlos.lopez@example.com",
      birthdate: new Date("1988-03-15"),
      nDni: 45678901,
      location: [
        { domicilio: "Boulevard Saint-Michel 10", address: "París, Francia" },
      ],
      credentialsId: {
        id: 4,
        username: "carloslopez",
        password: "Carlos#Lopez123",
        rol: "moderator",
        createdAt: new Date("2021-05-05"),
        updatedAt: new Date("2023-11-01"),
        isVeridied: true,
      },
    },
    status: true,
  },
  {
    id: 5,
    date: new Date("2024-12-30"),
    time: new Date("2024-12-30T11:30:00"),
    userId: {
      id: 5,
      photo: "user5.jpg",
      name: "Elena Martínez",
      email: "elena.martinez@example.com",
      birthdate: new Date("1995-07-19"),
      nDni: 56789012,
      location: [{ domicilio: "Via Roma 22", address: "Roma, Italia" }],
      credentialsId: {
        id: 5,
        username: "elenamartinez",
        password: "Elena!Secure789",
        rol: "user",
        createdAt: new Date("2023-06-10"),
        updatedAt: new Date("2023-11-25"),
        isVeridied: false,
      },
    },
    status: false,
  },
];

export const getAppointmentsService = async (): Promise<IAppointment[]> => {
  return appointments;
};

export const getAppointmentByIdService = async (
  id: number
): Promise<IAppointment | undefined> => {
  const appointment = appointments.find((appointment) => appointment.id === id);
  return appointment;
};