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
        solved: true
    },
    {
        title: "Mi frazada térmica no calienta",
        description: "La prendo y no da calor, me pregunto si debería arreglarla o comprar una nueva. Podrían llamarme para asesorarme? Gracias",
        dateOfPurchase: "09-12-2018",
        invoiceNumber: "5225540523",
        productCode: "ASKK9339",
        solved: true
    },
    {
        title: "Necesito reparación para mi heladera Phillips",
        description: "El freezer no congela",
        dateOfPurchase: "27-01-2015",
        invoiceNumber: "0395560429",
        productCode: "LSKC3029",
        solved: false
    },
    {
        title: "Mi televisión tiene los colores distorsionados",
        description: "Hace un tiempo que mi TV presenta problemas con el color, a qué se puede deber?",
        dateOfPurchase: "18-04-2016",
        invoiceNumber: "2200454502",
        productCode: "MBVM2929",
        solved: false
    },
    {
        title: "La licuadora se rompió al segundo uso",
        description: "Compré una licuadora hace una semana y se rompió al segundo uso, quiero una solución.",
        dateOfPurchase: "02-04-2023",
        invoiceNumber: "3950116342",
        productCode: "KPSD7732",
        solved: false
    },  
    {
        title: "El horno no funciona",
        description: "El horno no enciende, necesito una reparación o un reemplazo.",
        dateOfPurchase: "12-07-2021",
        invoiceNumber: "2356147823",
        productCode: "HLOI4210",
        solved: true
    },  
    {
        title: "El aire acondicionado hace un ruido extraño",
        description: "El aire acondicionado hace un ruido extraño desde hace unos días, necesito una reparación.",
        dateOfPurchase: "06-02-2020",
        invoiceNumber: "5923107895",
        productCode: "OAJK4582",
        solved: false
    },    
    {
        title: "No puedo descargar la aplicación",
        description: "He intentado descargar la aplicación varias veces y no puedo, necesito ayuda para solucionar este problema.",
        dateOfPurchase: "01-01-2023",
        invoiceNumber: "1029384756",
        productCode: "APPL5555",
        solved: false
    },
    {
        title: "El aspirador no tiene suficiente succión",
        description: "El aspirador no aspira como debería, necesito una solución.",
        dateOfPurchase: "11-03-2019",
        invoiceNumber: "9854371203",
        productCode: "ASPN8811",
        solved: false
    },
    {
        title: "La lavadora no centrifuga",
        description: "La lavadora no hace el ciclo de centrifugado, necesito una reparación.",
        dateOfPurchase: "08-10-2020",
        invoiceNumber: "3489015239",
        productCode: "LAVD7739",
        solved: false
    },
    {
        title: "El microondas se apaga solo",
        description: "El microondas se apaga solo después de unos segundos, necesito una solución.",
        dateOfPurchase: "27-09-2018",
        invoiceNumber: "7654321987",
        productCode: "MCRW2299",
        solved: false
    },
    {
        title: "El router no funciona",
        description: "El router no funciona y necesito internet para trabajar, necesito una solución urgente.",
        dateOfPurchase: "19-06-2022",
        invoiceNumber: "6030102934",
        productCode: "RTRR9988",
        solved: false
    },
    {
        title: "El monitor tiene una mancha en la pantalla",
        description: "El monitor tiene una mancha en la pantalla que no desaparece, necesito una reparación.",
        dateOfPurchase: "15-05-2021",
        invoiceNumber: "4093861736",
        productCode: "MNTR4545",
        solved: false
    },
    {
        title: "Problemas con la batería de mi celular",
        description: "Desde hace un par de días, la batería de mi celular se descarga muy rápido, incluso cuando no lo estoy usando. ¿Puede ser un problema del dispositivo o de la batería en sí?",
        dateOfPurchase: "07-10-2022",
        invoiceNumber: "123456789",
        productCode: "CEL1289",
        solved: false
    },
    {
        title: "No puedo acceder a mi cuenta",
        description: "He olvidado mi contraseña y al intentar restablecerla no me llega el correo electrónico de confirmación. ¿Pueden ayudarme a resolver este problema?",
        dateOfPurchase: "21-06-2021",
        invoiceNumber: "987654321",
        productCode: "APP9876",
        solved: false
    },
    {
        title: "Duda sobre la garantía del producto",
        description: "Compré un producto en su tienda hace tres meses y he notado que tiene un desperfecto que no estaba ahí al principio. ¿Todavía está cubierto por la garantía o ya no puedo reclamar?",
        dateOfPurchase: "02-02-2023",
        invoiceNumber: "2468101214",
        productCode: "PROD7890",
        solved: true
    }
]