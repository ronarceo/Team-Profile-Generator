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
            buildTeam();
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

function buildTeam() {
    let htmlArray = [];
    let htmlStart = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <h1>Team Profile</h1>
    </header>
    <div class="employeeCards">
    `
    htmlArray.push(htmlStart);

    for (let i = 0; i < employees.length; i++) {
        let card = `
        <div class="card">
            <div class="cardTop">
                <h2>${employees[i].name}</h2>
                <h2>${employees[i].title}</h2>
            </div>
            <div class="cardBottom">
                <p>Employee ID: ${employees[i].id}</p>
                <p>Email: <a href="mailto:${employees[i].email}">${employees[i].email}</a>></p>
        `
        if (employees[i].officeNumber) {
            card += `
            <p>Office Number: ${employees[i].officeNumber}</p>
            `
        } else if (employees[i].github) {
            card += `
            <p>GitHub: <a href="https://github.com/${employees[i].github}">${employees[i].github}</a></p>
            `
        } else if (employees[i].school) {
            card += `
            <p>School: ${employees[i].school}</p>
            `
        }
        card += `
        </div>
        </div>
        `
        htmlArray.push(card);
    }

    let htmlEnd = `
    </div>
    </body>
    </html>
    `
    htmlArray.push(htmlEnd);

    fs.writeFile(`./dist/team profile.html`, htmlArray.join(""), (err) =>
    err ? console.error(err) : console.log('Team Profile generated'))
}

managerInfo();