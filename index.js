const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

function managerInfo() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the name of the team manager?"
    },
    {
        type: "number",
        name: "id",
        message: "What is the team manager's ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the team manager's email address?"
    },
    {
        type: "number",
        name: "officeNumber",
        message: "What is the team manager's office number?"
    }
    ]).then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        console.log(manager)
        employees.push(manager);
        addEmployee();
    })
};

function addEmployee() {
    inquirer.prompt([{
        type: "list",
        name: "employeeClass",
        message: "Would you like to add an engineer or intern?",
        choices: ["Engineer", "Intern", "Team is complete"]
    }]).then(response => {
        if (response.employeeClass === "Engineer") {
            engineerInfo();
        } else if (response.employeeClass === "Intern") {
            internInfo();
        } else {
            console.log(employees);
        }
    })
}

function engineerInfo() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Engineer's name?"
    },
    {
        type: "number",
        name: "id",
        message: "Engineer's ID number:"
    },
    {
        type: "input",
        name: "email",
        message: "Engineer's email address:"
    },
    {
        type: "input",
        name: "github",
        message: "What is the URL of the Engineer's GitHub profile?"
    }
    ]).then(response => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        console.log(engineer);
        employees.push(engineer);
        addEmployee();
    })
};

function internInfo() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Intern's name?"
    },
    {
        type: "number",
        name: "id",
        message: "Intern's ID number:"
    },
    {
        type: "input",
        name: "email",
        message: "Intern's email address:"
    },
    {
        type: "input",
        name: "school",
        message: "What school does/did the intern attend?"
    }
    ]).then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        employees.push(intern);
        addEmployee();
    })
};

managerInfo();