//this is to link to Employee.js
const Employee = require("./Employee.js")



class Engineer extends Employee{
    constructor(name, id, email, github){
        //super is used to access and call functions on an object's parent
        super(name, id, email);
        this.github=github;
    }
    getRole(){
        return "Engineer";
    }
    getGithub(){
        return this.github;
    }
 
 
 
}

module.exports=Engineer;









