const Manager = require('./lib/Manager.js');


// test for name, email, id, role validity


const testManager = new Manager("marina", "m@email.com", 11 , "manager", "101")

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

test('office number has value', () =>{
    expect(testManager.officeNumber).toEqual(expect.any(Number))
})