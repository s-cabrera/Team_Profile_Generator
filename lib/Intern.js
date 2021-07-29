const Employee = require('./Employee.js');

class Intern extends Employee{
    //CONSTRUCTOR
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    //Methods for Intern
    getSchool(){return this.school}
    //OVERRIDING getRole()
    getRole(){return 'Intern'}
}

module.exports = Intern;