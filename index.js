const fs = require("fs")
const inquirer = require ("inquirer");
const path=require("path");

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");



function getEngineer(){
    inquirer.prompt([
    {
    type: 'input',
        message: "Engineer's Name?",
        name: "engineerName",
    },
    {
        type: 'input',
        message: "Engineer's ID?",
        name: 'engineerId',
    },
    {
        type: 'input',
        message: "Engineer's email address?",
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: "What is the Engineer's Github username?",
        name: 'engineerGithub',
    },
    ])    
};


// .then((answers) => {
//     const htmlPageContent = generateHTML(answers);

//     fs.writeFile('index.html', htmlPageContent, (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );
//   });

function getManager(){
    inquirer.prompt([
    {
    type: 'input',
        message: "Manager's Name?",
        name: "managerName",
    },
    {
        type: 'input',
        message: "Manager's ID?",
        name: 'managerId',
    },
    {
        type: 'input',
        message: "Manager's email address?",
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: "What is the Manager's office number?",
        name: 'officeNumber',
    },
    ])    
}












function getIntern(){
    inquirer.prompt([
    {
    type: 'input',
        message: "Intern's Name?",
        name: "internName",
    },
    {
        type: 'input',
        message: "Intern's ID?",
        name: 'internId',
    },
    {
        type: 'input',
        message: "Intern's email address?",
        name: 'internEmail',
    },
    {
        type: 'input',
        message: "What school is the intern attending?",
        name: 'internSchool',
    },
    ])    
}