const User = require('./../app/models/user')

describe("Unit Tests for User class", () => {
    test('Create an User object', () => {
    // Aqui invocamos el código que vamos a usar en la app
    const user = new User (1, "EinarDvls", "Einar", "Bio", "dateCreated", "lastUpdated")

    // Aqui validamos los resultados de ese código
    // Esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)
    expect(user.id).toBe(1)
    expect(user.username).toBe("EinarDvls")
    expect(user.name).toBe("Einar")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).toBe("dateCreated")
    expect(user.lastUpdated).toBe("lastUpdated")
    });
})