const Intern = require('./lib/Intern.js');


// test for name, email, id, role validity


const testIntern = new Intern("sam", "sam@email.com", 56 , "intern", "uofa")

test('has a name', () => {
    expect(testIntern.name).toEqual(expect.any(String))
    expect(testIntern.name.length).toBeGreaterThan(2)
})

test('has a valid email', () =>{
    expect(testEngineer.email).toEqual(expect.stringContaining('@'))
})

test('has a role of Intern', () => {
    expect(testIntern.role).toBe('intern')
})

test('Id has value', () =>{
    expect(testIntern.id).toEqual(expect.any(Number))
})

test('school has a name', () => {
    expect(testIntern.school).toEqual(expect.any(String))
    expect(testIntern.school.length).toBeGreaterThan(2)
})
