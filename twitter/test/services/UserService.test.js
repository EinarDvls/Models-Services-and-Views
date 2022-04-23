const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {

  test("1. Create a new user using the UserService", () => {
    const user = UserService.create(1, "EinarDvls", "Einar")
    expect(user.username).toBe("EinarDvls")
    expect(user.name).toBe("Einar")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
  })
})