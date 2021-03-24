const Employee = require('./lib/Employee.js');


// test for name, email, id, role validity


const testEmployee = new Employee("bob", "bob@email.com", 101, "employee")

test('has a name', () => {
    expect(testEmployee.name).toEqual(expect.any(String))
    expect(testEmployee.name.length).toBeGreaterThan(2)
    
    
})
test('has a valid email', () =>{
    expect(testEmployee.email).toEqual(expect.stringContaining('@'))
})

test('has a role of employee', () => {
    expect(testEmployee.role).toBe('employee')
})

test('Id is a number', () =>{
    expect(testEmployee.id).toEqual(expect.any(Number))
})
