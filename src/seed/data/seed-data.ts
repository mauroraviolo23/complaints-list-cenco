export const SEED_USERS = [
    {
        fullName: "Administrador",
        email: "admin@mail.com",
        password: "12345678",
        roles: ["admin", "user"],
        isActive: true
    },
    {
        fullName: "Usuario Regular",
        email: "user@mail.com",
        password: "12345678",
        roles: ["user"],
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