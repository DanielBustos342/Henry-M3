import IUser from "./IUser";

interface IAppointment {
    id: number, //  ID numérico que identifica al turno.
    date: Date, // fecha para la cual fue reservado el turno.
    time: Date, // hora para la cual fue reservado el turno.
    userId: IUser, //ID del usuario que agendó el turno, referencia al usuario
    status: boolean // status actual del turno, que puede ser “active” o “cancelled”.
}

export default IAppointment;