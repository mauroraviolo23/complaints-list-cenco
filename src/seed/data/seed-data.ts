export const SEED_USERS = [
    {
        fullName: "Usuario Regular",
        email: "user@mail.com",
        password: "12345678",
        roles: ["user"],
        isActive: true
    },
    {
        fullName: "Administrador",
        email: "admin@mail.com",
        password: "12345678",
        roles: ["admin", "user"],
        isActive: true
    },
    {
        fullName: "Usuario Inactivo",
        email: "inactive_user@mail.com",
        password: "12345678",
        roles: ["user"],
        isActive: false
    }
]

export const SEED_COMPLAINTS = [
    {
        title: "No me funciona el control remoto",
        description: "El control remoto de mi aire acondicionado dejó de funcionar. Aún está en garantía",
        details: "x",
        solved: false
    },
    {
        title: "Cómo usar las funciones de mi Smart TV???",
        description: "Quisiera recibir ayuda o un manual para poder aprender a usar las funciones de mi Smart TV",
        details: "x",
        solved: false
    },
    {
        title: "No recibí respuestas a mi solicitud",
        description: "La semana pasada solicité un servicio para mi microondas, me dijeron que me iban a llamar para coordinar el horario y nunca lo hicieron.",
        details: "x",
        solved: false
    }

]