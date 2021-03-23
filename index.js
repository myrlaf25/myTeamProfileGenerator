const fs = require("fs")
const inquirer = require ("inquirer");
const path=require("path");

const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");

const generateHTML = require("./generateHTML")
const writeHTML = require("./generateHTML")

const teamAnswers=[];




function userInput (){
    return inquirer.prompt([
        {
            type: "list",
            message: "What is the employee's role?",
            name: "role",
            choices: ["Engineer", "Manager", "Intern"]

        }
    ])
    .then(function(answers){
        console.log(answers)
         if(answers.role === "Engineer"){

           
                 inquirer.prompt([
                 {
                     type: 'input',
                     message: "Engineer's Name?",
                     name: "name",
                 },
                 {
                     type: 'input',
                     message: "Engineer's ID?",
                     name: 'id',
                 },
                 {
                     type: 'input',
                     message: "Engineer's email address?",
                     name: 'email',
                 },
                 {
                     type: 'input',
                     message: "What is the Engineer's Github username?",
                     name: 'github',
                 },
                 ]) 
                 .then(function(engineerAns){
                     const engineer = new Engineer (engineerAns.name, engineerAns.id, engineerAns.email, engineerAns.role, engineerAns.github);
                     console.log(engineer);
                     teamAnswers.push(engineer);
                     addEmployee(); 
                 });   
           
                }else if (answers.role === "Manager"){

                    inquirer.prompt([
                    {
                    type: 'input',
                        message: "Manager's Name?",
                        name: "name",
                    },
                    {
                        type: 'input',
                        message: "Manager's ID?",
                        name: 'id',
                    },
                    {
                        type: 'input',
                        message: "Manager's email address?",
                        name: 'email',
                    },
                    {
                        type: 'input',
                        message: "What is the Manager's office number?",
                        name: 'officeNumber',
                    },
                    ])    
                    .then(function(managerAns){
                        const manager = new Manager (managerAns.name, managerAns.id, managerAns.email, managerAns.role, managerAns.officeNumber);
                        console.log(manager);
                        teamAnswers.push(manager);
                        addEmployee(); 

                });

            }else if (answers.role === "Intern"){

                inquirer.prompt([
                {
                type: 'input',
                    message: "Intern's Name?",
                    name: "name",
                },
                {
                    type: 'input',
                    message: "Intern's ID?",
                    name: 'id',
                },
                {
                    type: 'input',
                    message: "Intern's email address?",
                    name: 'email',
                },
                {
                    type: 'input',
                    message: "What school is the intern attending?",
                    name: 'school',
                },
                ])
                .then(function(internAns){
                    const intern = new Intern (internAns.name, internAns.id, internAns.email, internAns.role, internAns.school);
                    console.log(intern);
                    teamAnswers.push(intern);
                    addEmployee();     


            });
            


        };
        
    })
    .catch(function(err){
        console.log(err);
    })
};
function addEmployee(){
    inquirer.prompt([ 
{
    type: "confirm",
    message: "Do you want to add another employee?",
    name: "next"
}
])
.then(function(confirmAnswer){
    confirmAnswer.next ? userInput() : null
})
// .then(answers=>{
//     if(answers.next === true){
//         userInput(teamAnswers)
//     }else{
//         null
//         console.log("teamAnswers", teamAnswers)
//         let cardsHTML = generateHTML(teamAnswers)
//         writeHTML(cardsHTML)
//     }
.catch(function(err){
    console.log(err);
})
    

// .catch(function(err){
    //     console.log(err);
    // })

    .then((answers) => {
        console.log(answers);
        const htmlPageContent = generateHTML(teamAnswers);
        console.log(htmlPageContent);
        fs.writeFile('sampleIndex.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });
    
}
// function writeSite(html){
//     fs.writeFile("sampleIndex.html", html, err =>{
//         if(err){
//             throw err
//         }
//         console.log("saved")
//         fs.copyFile()
//     })
// }
// const copyFile=()=>{
//     fs.copyFile("./dist/style.css", err =>{
//         if(err){
//             console.log(err);
//         }
//         console.log("css copied")
//     })
// }
// }


   

    
userInput();
       







// <div class="card bg-primary" style="width: 18rem;">
//         <div class="card-header">
//           <h5 class="managerName card-title text-white">${data.managerName}</h5>
//           <h6 class="managerRole card-subtitle mb-2 text-white">${data.role}</h6>
//         </div>
//         <div class="card-body">  
//           <ul class="list-group list-group-flush">
//             <li class="managerId list-group-item">ID: ${data.managerId}</li>
//             <li class="managerEmail list-group-item">Email: ${data.managerEmail}</li>
//             <li class="officeNumber list-group-item">Office Number: ${data.officeNumber}</li>
//           </ul>
//         </div>
//       </div>

//       <div class="card bg-primary" style="width: 18rem;">
//         <div class="card-header">
//           <h5 class="internName card-title text-white">${data.internName}</h5>
//           <h6 class="internRole card-subtitle mb-2 text-white">${data.role}</h6>
//         </div>
//         <div class="card-body">  
//           <ul class="list-group list-group-flush">
//             <li class="internId list-group-item">ID: ${data.internId}</li>
//             <li class="internEmail list-group-item">Email: ${data.internEmail}</li>
//             <li class="school list-group-item">School: ${data.school}</li>
//           </ul>
//         </div>
//       </div>
