const Manager = require('../lib/Manager');


// test for name, email, id, role validity


const testManager = new Manager("marina", 11 , "m@email.com", "manager", "101",)

test('has a name', () => {
    expect(testManager.name).toEqual(expect.any(String))
    expect(testManager.name.length).toBeGreaterThan(2)
})

test('email has a valid email address', () =>{
    expect(testManager.email).toEqual(expect.stringContaining('@'))
})

test('has a role of Manager', () => {
    expect(testManager.role).toBe('manager')
})

test('Id has value', () =>{
    expect(testManager.id).toEqual(expect.any(Number))
})

test('Entered a office', () =>{
    objectKeys= Object.keys(testManager)
    office = objectKeys[4]

    expect(office).toBe('officeNumber')

    expect(testManager.officeNumber).toEqual(expect.any(String))

})


