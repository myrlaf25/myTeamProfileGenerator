let GenerateHTML = (teamAnswersArr) => {
  console.log("team answers array", teamAnswersArr);
  let card = "";
  for (let i = 0; i < teamAnswersArr.length; i++) {
    let lastItem =
      teamAnswersArr[i].school ||
      teamAnswersArr[i].github ||
      teamAnswersArr[i].officeNumber;
    let objectKeys = Object.keys(teamAnswersArr[i]);
    let lastAtt = objectKeys[4];
    console.log(objectKeys);
    let finalAnswer = lastAtt + ": " + lastItem;

    if (lastAtt === "github") {
      finalAnswer = `Github: <a href= 'https://github.com/${teamAnswersArr[0].github}'> ${teamAnswersArr[0].github}</a>`;
      console.log(finalAnswer);
    } else if (lastAtt === "officeNumber") {
      finalAnswer = `Office Number: ${teamAnswersArr[i].officeNumber}`;
      console.log(finalAnswer);
    } else if (lastAtt === "school") {
      finalAnswer = `School: ${teamAnswersArr[i].school}`;
      console.log(finalAnswer);
    } else {
      console.log(finalAnswer, "test");
    }

    let { name, role, email, id } = teamAnswersArr[i];
    card += `<div class="card bg-primary" style="width: 18rem;">
         <div class="card-header">
            <h5 class="engineerName card-title text-white"> ${name} </h5>
            <h6 class="engineerRole card-subtitle mb-2 text-white"> ${role} </h6>
         </div>
           <div class="card-body">  
           <ul class="list-group list-group-flush">
               <li class="engineerId list-group-item">ID: ${id} </li>
               <li class="engineerEmail list-group-item">Email:<a href= "mailto: ${email}"> ${email}</a> </li>
               <li class="engineerGithub list-group-item"> ${finalAnswer} </li>
             </ul>
           </div>
         </div>
        `;
  }

  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
     <style>
     body {
         background-image: url("https://images.unsplash.com/photo-1612637829367-636c0e807fef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80");
         background-repeat: no-repeat;
         background-position: center;
         background-size:cover;
         font-family:Verdana, Tahoma, sans-serif;
       
     }
     .card {
         display: flex;
         justify-content:space-between;
         flex-direction: row;
    
     }
    
     #container {
         display: flex;
         justify-content: space-around;
     }
     </style>
</head>
<body>
    <div class="display-4 p-3 mb-2 bg-danger d-flex justify-content-center text-white">My Team</div>
    
    <div id="container">

    ${card}
    

      
    


    </div>
</body>
</html>`;
};

module.exports = GenerateHTML;
