const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Employee = require("./lib/Employee.js");
const generateHTML = require("./generateHTML");
const writeHTML = require("./app.js");
let teamAnswers = [];
console.log(teamAnswers);

function userInput() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Employee's Name?",
        name: "name",
        validate: nameInput =>{
            if(nameInput){
                return true;
            }else {
                console.log("Please enter an employee's name. ")
                return false;
            }
        }
      },
      {
        type: "input",
        message: "Employee's ID?",
        name: "id",
        validate: idInput =>{
            if(idInput){
                return true;
            }else {
                console.log("Please enter a number ID. ")
                return false;
            }
        }
      },
      {
        type: "input",
        message: "Employee's email address?",
        name: "email",
        validate: emailInput =>{
            if(emailInput){
                return true;
            }else {
                console.log("Please enter a valid @email address. ")
                return false;
            }
        }
      },
      {
        type: "list",
        message: "What is the employee's role?",
        name: "role",
        choices: ["Engineer", "Manager", "Intern"],
      },
    ])
    .then(function (answers) {
      console.log(answers);
      if (answers.role === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the Engineer's Github username?",
              name: "github",
              validate: githubInput =>{
                if(githubInput){
                    return true;
                }else {
                    console.log("Please enter a Github username. ")
                    return false;
                }
            }
            },
          ])
          .then((ans) => {
            console.log(ans.github);
            console.log(answers.role);

            const engineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              answers.role,
              ans.github
            )

            console.log(engineer);

            teamAnswers.push(engineer);
            addEmployee();
          });
      } else if (answers.role === "Manager") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is the Manager's office number?",
              name: "officeNumber",
              validate: officeNumberInput =>{
                if(officeNumberInput){
                    return true;
                }else {
                    console.log("Please enter an Office Number. ")
                    return false;
                }
            }
            },
          ])
          .then((ans) => {
            console.log(ans.officeNumber);

            const manager = new Manager(
              answers.name,
              answers.id,
              answers.email,
              answers.role,
              ans.officeNumber
            )
            console.log(manager);
            teamAnswers.push(manager);
            addEmployee();
          });
      } else if (answers.role === "Intern") {
        inquirer
          .prompt([
            {
              type: "input",
              message: "What school is the intern attending?",
              name: "school",
              validate: schoolInput =>{
                if(schoolInput){
                    return true;
                }else {
                    console.log("Please enter a school name. ")
                    return false;
                }
            }
            },
          ])
          .then((ans) => {
            console.log(ans.school);

            const intern = new Intern(
              answers.name,
              answers.id,
              answers.email,
              answers.role,
              ans.school
            )
            console.log(intern);
            teamAnswers.push(intern);
            addEmployee();
          });
      } else {
        const employee = new Employee(
          answers.name,
          answers.id,
          answers.email,
          answers.role
        )
        teamAnswers.push(employee);
        addEmployee();
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "confirm",
        message: "Do you want to add another employee?",
        name: "next",
      },
    ])

    .then((ans) => {
      if (ans.next === true) {
        userInput(teamAnswers);
      } else {
        console.log("teamAnswers", teamAnswers);
        let cardsHTML = generateHTML(teamAnswers);
        writeHTML(cardsHTML);
      }
    });
}

userInput();

