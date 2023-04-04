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
        dateOfPurchase: "25-02-2022",
        invoiceNumber: "1292943020",
        productCode: "AOBE1020",
        solved: false
    },
    {
        title: "Cómo usar las funciones de mi Smart TV???",
        description: "Quisiera recibir ayuda o un manual para poder aprender a usar las funciones de mi Smart TV",
        dateOfPurchase: "20-09-2021",
        invoiceNumber: "1292778920",
        productCode: "SSKW3031",
        solved: false
    },
    {
        title: "No recibí respuestas a mi solicitud",
        description: "La semana pasada solicité un servicio para mi microondas, me dijeron que me iban a llamar para coordinar el horario y nunca lo hicieron.",
        dateOfPurchase: "17-01-2023",
        invoiceNumber: "396758201",
        productCode: "SOEL5591",
        solved: false
    },
    {
        title: "Como puedo solicitar ayuda telefónica?",
        description: "No encuentro el número de teléfono para pedir asistencia por este medio",
        dateOfPurchase: "04-03-2023",
        invoiceNumber: "2033571245",
        productCode: "FTLC2242",
        solved: false
    },
    {
        title: "Tengo un problema con mi cafetera",
        description: "Mi cafetera funciona mal desde hace una semana, debo llevarla al servicio o vienen a domicilio? Gracias",
        dateOfPurchase: "25-02-2020",
        invoiceNumber: "5068940523",
        productCode: "XCMV1130",
        solved: false
    }

]