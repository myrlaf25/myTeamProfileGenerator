const Engineer = require('../lib/Engineer');


// test for name, email, id, role validity


const testEngineer = new Engineer("myrla", 25 , "myrla@gmail.com",  "engineer", "testGithub")

test('has a name', () => {
    expect(testEngineer.name).toEqual(expect.any(String))
    expect(testEngineer.name.length).toBeGreaterThan(2)
})

test('has a valid email', () =>{
    expect(testEngineer.email).toEqual(expect.stringContaining('@'))
})

test('has a role of Engineer', () => {
    expect(testEngineer.role).toBe('engineer')
})

test('Id has value', () =>{
    expect(testEngineer.id).toEqual(expect.any(Number))
})

test('Entered a github', () =>{
    objectKeys= Object.keys(testEngineer)
    gitHub = objectKeys[5]

    expect(gitHub).toBe('testGithub')
    instanceof("should return the obects github", ()=>{

        expect(testEngineer.getGithub()).toBe("testGithub")

    })

})
