//const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer.js");

describe('Engineer', () => {
    describe('Initialization', () => {
        it("should create a Engineer instance with the name, email, id, github", () => {
            const name = "Jim Halpert";
            const id = '0001';
            const email = 'jimhalpert@email.com';
            const github = 'jim-halpert';
            
            const engineer = new Engineer(name, id, email, github);
            
            expect(engineer.name).toEqual("Jim Halpert")
            expect(engineer.id).toEqual('0001')
            expect(engineer.email).toEqual('jimhalpert@email.com')
            expect(engineer.github).toEqual('jim-halpert')
            
        });
    });
    describe('Engineer methods', () => {
        it("getName() should return the name property of the Engineer object", () => {
            const name = "Jim Halpert";
            const id = '0001';
            const email = 'jimhalpert@email.com';
            const github = 'jim-halpert';
            
            const engineer = new Engineer(name, id, email, github);

            expect(engineer.getName()).toEqual("Jim Halpert");
        });
        it("getId() should return the id property of the Engineer object", () => {
            const name = "Jim Halpert";
            const id = '0001';
            const email = 'jimhalpert@email.com';
            const github = 'jim-halpert';
            
            const engineer = new Engineer(name, id, email, github);

            expect(engineer.getId()).toEqual("0001");
        });
        it("getEmail() should return the email property of the Engineer object", () => {
            const name = "Jim Halpert";
            const id = '0001';
            const email = 'jimhalpert@email.com';
            const github = 'jim-halpert';
            
            const engineer = new Engineer(name, id, email, github);

            expect(engineer.getEmail()).toEqual("jimhalpert@email.com");
        });
        it("getRole() should return the role of the Engineer object", () => {
            const name = "Jim Halpert";
            const id = '0001';
            const email = 'jimhalpert@email.com';
            const github = 'jim-halpert';
            
            const engineer = new Engineer(name, id, email, github);

            expect(engineer.getRole()).toEqual('Engineer');
        });
        it("getGithub() should return the role of the Engineer object", () => {
            const name = "Jim Halpert";
            const id = '0001';
            const email = 'jimhalpert@email.com';
            const github = 'jim-halpert';
            
            const engineer = new Engineer(name, id, email, github);

            expect(engineer.getGithub()).toEqual('jim-halpert');
        });
    });
});