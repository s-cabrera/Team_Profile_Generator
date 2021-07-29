//const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager.js");

describe('Manager', () => {
    describe('Initialization', () => {
        it("should create a Manager instance with the name, email, id, and office", () => {
            const name = "Jim Halpert";
            const id = '0001';
            const email = 'jimhalpert@email.com';
            const office = '1000';
            
            const manager = new Manager(name, id, email, office);
            
            expect(manager.name).toEqual("Jim Halpert")
            expect(manager.id).toEqual('0001')
            expect(manager.email).toEqual('jimhalpert@email.com')
            expect(manager.office).toEqual('1000')

        });
    });
    describe('Manager methods', () => {
        it("getName() should return the name property of the Manager object", () => {
            const name = "Jim Halpert";
            const id = '0001';
            const email = 'jimhalpert@email.com';
            const office = '1000';
            
            const manager = new Manager(name, id, email, office);

            expect(manager.getName()).toEqual("Jim Halpert");
        });
        it("getId() should return the id property of the Manager object", () => {
            const name = "Jim Halpert";
            const id = '0001';
            const email = 'jimhalpert@email.com';
            const office = '1000';
            
            const manager = new Manager(name, id, email, office);

            expect(manager.getId()).toEqual("0001");
        });
        it("getEmail() should return the email property of the Manager object", () => {
            const name = "Jim Halpert";
            const id = '0001';
            const email = 'jimhalpert@email.com';
            const office = '1000';
            
            const manager = new Manager(name, id, email, office);

            expect(manager.getEmail()).toEqual("jimhalpert@email.com");
        });
        it("getRole() should return the role of the Manager object", () => {
            const name = "Jim Halpert";
            const id = '0001';
            const email = 'jimhalpert@email.com';
            const office = '1000';
            
            const manager = new Manager(name, id, email, office);

            expect(manager.getRole()).toEqual('Manager');
        });
    });
});