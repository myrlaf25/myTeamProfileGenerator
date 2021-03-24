const Employee = require("./Employee.js")

class Intern extends Employee{
    constructor(name, id, email, role, school){
        //super is used to access and call functions on an object's parent
        super(name, id, email, role);
        this.school=school;
    
    }
    getRole(){
        return "Intern";
    }
    getSchool(){
        return this.school;
    }
 
 
}

module.exports=Intern;









