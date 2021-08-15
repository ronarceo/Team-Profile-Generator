const Employee = require("../lib/Employee");

test("Can instantiate Employee object", () => {
  let a = new Employee();
  expect(typeof(a)).toBe("object");
});

test("Can set name using constructor arguments", () => {
  let testName = "Ron";
  let a = new Employee(testName);
  expect(a.name).toBe(testName);
});

test("Can set id using constructor argument", () => {
  let testId = 1;
  let a = new Employee("Ron", testId);
  expect(a.id).toBe(testId);
});

test("Can set email using constructor argument", () => {
  let testEmail = "ron@mail.com";
  let a = new Employee("Ron", 1, testEmail);
  expect(a.email).toBe(testEmail);
});

test("Can get name using getName() method", () => {
  let testName = "Ron";
  let a = new Employee(testName);
  expect(a.getName()).toBe(testName);
});

test("Can get id using getId() method", () => {
  let testId = 1;
  let a = new Employee("Ron", testId);
  expect(a.getId()).toBe(testId);
});

test("Can get email using getEmail() method", () => {
  let testEmail = "ron@mail.com";
  let a = new Employee("Ron", 1, testEmail);
  expect(a.getEmail()).toBe(testEmail);
});

test("getRole() method should return 'Employee'", () => {
  let testRole = "Employee";
  let a = new Employee("Ron", 1, "ron@mail.com");
  expect(a.getRole()).toBe(testRole);
});