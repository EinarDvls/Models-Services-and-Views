const User = require('./../../app/models/user')

describe("Unit Tests for User class", () => {
	test('1) Create an User object', () => {

		// Aqui invocamos el código que vas a usar en la app
		const user = new User(1,"EinarDvls", "Einar", "Bio", "dateCreated", "lastUpdated")

		// Aqui validamos los resultados de este código
        // Esta es una comparación que va a igualar el valor de la izquierda con el valor de la derecha(valor esperado)
		expect(user.id).toBe(1)
		expect(user.username).toBe("EinarDvls")
		expect(user.name).toBe("Einar")
		expect(user.bio).toBe("Bio")
		expect(user.dateCreated).not.toBeUndefined()// Verifica que el valor no sea undefine
        expect(user.lastUpdated).not.toBeUndefined()
	})

    test('2) Add getters', () =>{
        const user = new User(1, "EinarDvls", "Einar", "Bio")
        expect(user.getUsername).toBe("EinarDvls")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })

    test('3) Add setters', ()=>{
        const user = new User(1, "EinarDvls", "Einar", "Bio")
        user.setUsername = "Davalos"
        expect(user.username).toBe("Davalos")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    })
});