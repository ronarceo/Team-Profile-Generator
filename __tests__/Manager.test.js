const Manager = require("../lib/Manager");

test("Can set office number using constructor argument", () => {
  let testNumber = 123;
  let a = new Manager("Ron", 1, "ron@mail.com", testNumber);
  expect(a.officeNumber).toBe(testNumber);
});

test("getRole() method should return 'Manager'", () => {
  let testRole = "Manager";
  let a = new Manager("Ron", 1, "ron@mail.com", 123);
  expect(a.getRole()).toBe(testRole);
});

test("Can get office number using getOfficeNumber() method", () => {
  let testNumber = 123;
  let a = new Manager("Ron", 1, "ron@mail.com", testNumber);
  expect(a.getOfficeNumber()).toBe(testNumber);
});