// Node libraries
const inquirer = require('inquirer');
const fs = require('fs');

// Imports
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

var employees = [];

function generateHTML(){
    let html = 
    `<!DOCTYPE html>\n
    <html lang="en">\n
    <head>\n
        \t<meta http-equiv="content-type" content="text-html; charset=utf-8">\n
        \t<meta http-equiv="X-UA-Compatible" content="IE=edge">\n
        \t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n
        \t<title>Team Profile</title>\n

        \t<!-- Font Awesome -->\n
        \t<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css">\n
        \t<!-- Bootstrap -->\n
        \t<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"/>\n
    </head>\n\n
    <body>\n
        \t<header class="p-3 bg-danger text-white text-center"><h1>My Team</h1></header>\n
        \t<div class="container">\n
            \t\t<div id="card-container" class="d-flex justify-content-center flex-wrap p-2 bd-highlight">\n\n`;
    
    //Generate employee html        
    employees.forEach(employee => html += generateEmployeeHTML(employee));
    
    //Add the rest of the HTML
    html += 
    `
    \t\t</div>\n
    \t</div>\n
    </body>\n
    </html>\n
    `;

    fs.writeFileSync('./dist/index.html', html);
}

function generateEmployeeHTML(employee){
    var listItem;
    switch(employee.getRole()){
        case 'Manager':
            listItem = `Office: ${employee.office}`; 
        break;
        
        case 'Engineer':
            listItem = `Github: <a href="https://github.com/${employee.getGithub()}">
            https://github.com/${employee.getGithub()}</a>`;
        break;
        
        case 'Intern': 
            listItem = `Office: ${employee.getSchool()}`;
        break;

        default:
            listItem = '';
            console.log("Employee type is invalid. HTML will not be generated");
        break;
    }

    let html =
    `\t\t\t<div class="card m-3" style="width: 18rem;">\n\t
        \t\t\t\t<div class="card-header bg-primary text-white p-3">\n
            \t\t\t\t\t<h5 class="card-title ">${employee.getName()}</h5>\n
            \t\t\t\t\t<div class="card-subtitle mb-2">\n
                \t\t\t\t\t\t<i class="d-inline fas fa-mug-hot"></i>\n
                \t\t\t\t\t\t<h6 class="d-inline">${employee.getRole()}</h6>\n
            \t\t\t\t\t</div>\n
        \t\t\t\t</div>\n
        \t\t\t\t<div class="card-body">\n
            \t\t\t\t\t<ul class="list-group list-group-flush">\n
                \t\t\t\t\t\t<li class="list-group-item">ID: ${employee.getId()}</li>\n
                \t\t\t\t\t\t<li class="list-group-item">Email: <a id="email" href="">${employee.getEmail()}</a></li>\n
                \t\t\t\t\t\t<li class="list-group-item">${listItem}</li>\n
            \t\t\t\t\t</ul>\n
        \t\t\t\t</div>\n
    \t\t\t</div>\n\n`;

    return html;
}


const employee_prompts = [
    {
        type: 'input',
        message: "Enter name: ",
        name: 'name'
    },
    {
        type: 'input',
        message: "Enter ID: ",
        name: 'id'
    },
    {
        type: 'email',
        message: "Enter email: ",
        name: 'email'
    }
]

const managerLogin = [
    ...employee_prompts,
    {
        type:'input',
        message: 'Enter office number: ', 
        name: 'office'
    }
];

const menu = [    {
    type: 'list',
    message: 'Which employee do you want to add? (Choose Finished if you are done adding employees to your team)',
    choices: ['Engineer', 'Intern', 'Finished'],
    name: 'menu'
}]

const EngineerPrompts = [
    ...employee_prompts,
    {
        type: 'input',
        message: 'Enter Github username: ',
        name: 'github'
    }
];

const InternPrompts = [
    ...employee_prompts,
    {
        type: 'input',
        message: 'Enter school: ',
        name: 'school'
    }
];

function login(){
    inquirer.prompt(managerLogin)
    .then((res)=> {
        //CHECK FOR MANAGER AUTHENICATION
        console.log(res);
        let manager = new Manager(res.name, res.id, res.email, res.office);
        employees.push(manager);
        generateHTML()
    })
}

login()