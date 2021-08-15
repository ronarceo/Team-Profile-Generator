const Engineer = require("../lib/Engineer");

test("Can set GitHUb account using constructor", () => {
    let testGitHub = "rongithub";
    let a = new Engineer("Ron", 1, "ron@mail.com", testGitHub);
    expect(a.github).toBe(testGitHub);
});

test("getRole() method should return 'Engineer'", () => {
    let testRole = "Engineer";
    let a = new Engineer("Ron", 1, "ron@mail.com", "rongithub");
    expect(a.getRole()).toBe(testRole);
});

test("Can get GitHub username using getGithub() method", () => {
    let testGitHub = "rongithub";
    let a = new Engineer("Ron", 1, "ron@mail.com", testGitHub);
    expect(a.getGithub()).toBe(testGitHub);
});