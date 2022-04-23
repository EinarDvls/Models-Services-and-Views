const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {

  test("1. Create a new user using the UserService", () => {
    const user = UserService.create(1, "EinarDvls", "Einar")
    expect(user.username).toBe("EinarDvls")
    expect(user.name).toBe("Einar")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
  })

  test("2. Get all user data in a list", () =>{
      const user = UserService.create(1, "EinarDvls", "Einar")
      const userInfoInList = UserService.getInfo(user)
      expect(userInfoInList[0]).toBe(1)
      expect(userInfoInList[1]).toBe("EinarDvls")
      expect(userInfoInList[2]).toBe("Einar")
      expect(userInfoInList[3]).toBe("Sin bio")
  })

  test("3. Update username", () =>{
      const user = UserService.create(1, "EinarDvls", "Einar")
      UserService.updateUserUsername(user, "EinarD")
      expect(user.username).toBe("EinarD")
  })

  test("4. Given a list of users give me the list of username", () =>{
      const user1 = UserService.create(1, "EinarDvls1", "Einar")
      const user2 = UserService.create(1, "EinarDvls2", "Einar")
      const user3 = UserService.create(1, "EinarDvls3", "Einar")
      const username = UserService.getAllUsernames([user1, user2, user3])
      expect(username).toContain("EinarDvls1")
      expect(username).toContain("EinarDvls2")
      expect(username).toContain("EinarDvls2")
  })
})