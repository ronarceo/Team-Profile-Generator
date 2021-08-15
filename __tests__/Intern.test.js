const Intern = require("../lib/Intern");

test("Can set school using constructor", () => {
    let testSchool = "Northwestern University";
    let a = new Intern("Ron", 1, "ron@mail.com", testSchool);
    expect(a.school).toBe(testSchool);
});

test("getRole() method should return 'Intern'", () => {
    let testRole = "Intern";
    let a = new Intern("Ron", 1, "ron@mail.com", "Northwestern Univesrsity");
    expect(a.getRole()).toBe(testRole);
});

test("Can get school using getSchool() method", () => {
    let testSchool = "Northwestern University";
    let a = new Intern("Ron", 1, "ron@mail.com", testSchool);
    expect(a.getSchool()).toBe(testSchool);
});