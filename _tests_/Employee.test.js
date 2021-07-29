const Employee = require("../lib/Employee.js");

describe('Employee', () => {
    describe('Initialization', () => {
        it("should create a Employee instance with the name, email, id", () => {
            const name = "Jim Halpert";
            const id = '0001';
            const email = 'jimhalpert@email.com';

            const employee = new Employee(name, id, email);

            expect(employee.name).toEqual("Jim Halpert")
            expect(employee.id).toEqual('0001')
            expect(employee.email).toEqual('jimhalpert@email.com')
        });
    });
    describe('Employee methods', () => {
        it("getName() should return the name property of the Employee object", () => {
            const name = "Jim Halpert";
            const id = "0001";
            const email = 'jimhalpert@email.com';
    
            const employee = new Employee(name, id, email);

            expect(employee.getName()).toEqual("Jim Halpert");
        });
        it("getId() should return the id property of the Employee object", () => {
            const name = "Jim Halpert";
            const id = "0001";
            const email = 'jimhalpert@email.com';
    
            const employee = new Employee(name, id, email);

            expect(employee.getId()).toEqual("0001");
        });
        it("getEmail() should return the email property of the Employee object", () => {
            const name = "Jim Halpert";
            const id = "0001";
            const email = 'jimhalpert@email.com';
    
            const employee = new Employee(name, id, email);

            expect(employee.getEmail()).toEqual("jimhalpert@email.com");
        });
        it("getRole() should return the role of the Employee object", () => {
            const name = "Jim Halpert";
            const id = "0001";
            const email = 'jimhalpert@email.com';
    
            const employee = new Employee(name, id, email);

            expect(employee.getRole()).toEqual('Employee');
        });
    });
});