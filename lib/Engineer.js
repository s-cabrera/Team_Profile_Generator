const Employee = require('./Employee.js');

class Engineer extends Employee{
    //CONSTRUCTOR
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    //Methods for Engineer
    getGithub(){return this.github}
    //OVERRIDING getRole()
    getRole(){return 'Engineer'}
}

module.exports = Engineer;