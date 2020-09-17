const User = require("../model/user");
require("../db/mongoose")


beforeEach(async () => {
    await User.deleteMany({})
    await User.insertMany([{ name: "lebron", email: "lebron@gmail.com" }, { name: "kofi arhin", email: 'kofi arhin@gmail.com' }])
})

test("get lits of users", async () => {

    const users = await User.find({})
    expect(users).not.toBeNull()

});


test('it should not be more than 1', async () => {

    const users = await User.find({})
    expect(users.length).toBeGreaterThan(1)


});

afterAll(async () => {

    await User.deleteMany({})
})

test("first user should be lebron", async () => {

    const users = await User.find({})
    expect(users[0].name).toBe("lebron")
})