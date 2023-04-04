export const SEED_USERS = [
    {
        fullName: "Usuario Regular",
        email: "user@mail.com",
        password: "12345678",
        roles: ["user"],
        isActive: true
    },
    {
        fullName: "Otro usuario regular",
        email: "other-user@mail.com",
        password: "12345678",
        roles: ["user"],
        isActive: true
    },
    {
        fullName: "Administrador",
        email: "admin@mail.com",
        password: "12345678",
        roles: ["admin"],
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
        description: "El control remoto de mi aire acondicionado DEJÓ DE FUNCIONAR!!!. Aún está en garantía",
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
    },
    {
        title: "Como puedo solicitar ayuda telefónica?",
        description: "No encuentro el número de teléfono para pedir asistencia por este medio",
        details: "x",
        solved: false
    },
    {
        title: "Tengo un problema con mi cafetera",
        description: "Mi cafetera funciona mal desde hace una semana, debo llevarla al servicio o vienen a domicilio? Gracias",
        details: "x",
        solved: false
    }

]