//const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern.js");

describe('Intern', () => {
    describe('Initialization', () => {
        it("should create an Intern instance with the name, email, id, school", () => {
            const name = "Jim Halpert";
            const id = '0001';
            const email = 'jimhalpert@email.com';
            const school = 'dunder mifflin';
            
            const intern = new Intern(name, id, email, school);
            
            expect(intern.name).toEqual("Jim Halpert")
            expect(intern.id).toEqual('0001')
            expect(intern.email).toEqual('jimhalpert@email.com')
            expect(intern.school).toEqual('dunder mifflin')

        });
    });
    describe('Intern methods', () => {
        it("getName() should return the name property of the Intern object", () => {
            const name = "Jim Halpert";
            const id = '0001';
            const email = 'jimhalpert@email.com';
            const school = 'dunder mifflin';
            
            const intern = new Intern(name, id, email, school);

            expect(intern.getName()).toEqual("Jim Halpert");
        });
        it("getId() should return the id property of the Intern object", () => {
            const name = "Jim Halpert";
            const id = '0001';
            const email = 'jimhalpert@email.com';
            const school = 'dunder mifflin';
            
            const intern = new Intern(name, id, email, school);

            expect(intern.getId()).toEqual("0001");
        });
        it("getEmail() should return the email property of the Intern object", () => {
            const name = "Jim Halpert";
            const id = '0001';
            const email = 'jimhalpert@email.com';
            const school = 'dunder mifflin';
            
            const intern = new Intern(name, id, email, school);

            expect(intern.getEmail()).toEqual("jimhalpert@email.com");
        });
        it("getRole() should return the role of the Intern object", () => {
            const name = "Jim Halpert";
            const id = '0001';
            const email = 'jimhalpert@email.com';
            const school = 'dunder mifflin';
            
            const intern = new Intern(name, id, email, school);

            expect(intern.getRole()).toEqual('Intern');
        });
        it("getGithub() should return the role of the Intern object", () => {
            const name = "Jim Halpert";
            const id = '0001';
            const email = 'jimhalpert@email.com';
            const school = 'dunder mifflin';
            
            const intern = new Intern(name, id, email, school);

            expect(intern.getSchool()).toEqual('dunder mifflin');
        });
    });
});