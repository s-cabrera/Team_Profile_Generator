const Employee = require('./Employee.js');

class Manager extends Employee{
    //CONSTRUCTOR
    constructor(name, id, email, office){
        super(name, id, email);
        this.office = office;
    }
    //OVERRIDING getRole()
    getRole(){return 'Manager'}
}

module.exports = Manager;