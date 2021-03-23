const Employee = require("./Employee.js")

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        //super is used to access and call functions on an object's parent
        super(name, id, email);
        this.officeNumber=officeNumber;
   
    }
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
 
 
 
}

module.exports=Manager;









