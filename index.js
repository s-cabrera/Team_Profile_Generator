// Node libraries
const inquirer = require('inquirer');
const fs = require('fs');
const validator = require('email-validator');
 
// Imported Employee types
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

var employees = [];

function generateHTML(){
    let html = 
    `
    <!DOCTYPE html>\n
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
    //console.log(employee);
    var listItem, icon;
    switch(employee.getRole()){
        case 'Manager':
            listItem = `Office: ${employee.office}`; 
            icon = 'fa-mug-hot';
        break;
        
        case 'Engineer':
            listItem = `Github: <a href="https://github.com/${employee.getGithub()}">
            https://github.com/${employee.getGithub()}</a>`;
            icon = 'fa-glasses';
        break;
        
        case 'Intern': 
            listItem = `School: ${employee.getSchool()}`;
            icon = 'fa-user-graduate';
        break;

        default:
            listItem = '';
            icon = '';
            console.log("Employee type is invalid. HTML will not be generated");
        break;
    }

    let html =
    `\t\t\t<div class="card m-3" style="width: 18rem;">\n\t
        \t\t\t\t<div class="card-header bg-primary text-white p-3">\n
            \t\t\t\t\t<h5 class="card-title ">${employee.getName()}</h5>\n
            \t\t\t\t\t<div class="card-subtitle mb-2">\n
                \t\t\t\t\t\t<i class="d-inline fas ${icon}"></i>\n
                \t\t\t\t\t\t<h6 class="d-inline">${employee.getRole()}</h6>\n
            \t\t\t\t\t</div>\n
        \t\t\t\t</div>\n
        \t\t\t\t<div class="card-body">\n
            \t\t\t\t\t<ul class="list-group list-group-flush">\n
                \t\t\t\t\t\t<li class="list-group-item">ID: ${employee.getId()}</li>\n
                \t\t\t\t\t\t<li class="list-group-item">Email: <a target="_blank" rel="noopener 
                    noreferrer" href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>\n
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
        type: 'input',
        message: "Enter email: ",
        name: 'email',
        validate: function(value){if(validator.validate(value)){
                return true
            }
            else{return 'Invalid Email! Try again! '}
        }
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

const menuPrompts = [    {
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

const addEngineer = async() => {
    let res = await inquirer.prompt(EngineerPrompts)
    let engineer = new Engineer(res.name, res.id, res.email, res.github);
    console.log(`\nEngineer ${engineer.getName()} was added!\n`);
    return engineer;
}

const addIntern = async() => {
    let res = await inquirer.prompt(InternPrompts)
    let intern = new Intern(res.name, res.id, res.email, res.school);
    console.log(`\nIntern: ${intern.getName()} was added!\n`);
    return intern;
}

const menu = async() => {
    const res = await inquirer.prompt(menuPrompts);
    switch(res.menu){
        case 'Engineer':
            const engineer = await addEngineer();
            employees.push(engineer);
            flag = true;
        break;
        case 'Intern':
            const intern = await addIntern(); 
            employees.push(intern);
            flag =  true;
        break;
        case 'Finished':
            flag = false;
        break;
        default:
            console.log("Something went wrong. Try again");
            flag =  true;
        break;    
    }
    return flag;
}

const login = async function(){
    await inquirer.prompt(managerLogin)
    .then((res) => {
        //CHECK FOR MANAGER AUTHENICATION
        if(validator.validate(res.email)){
            let manager = new Manager(res.name, res.id, res.email, res.office);
            employees.push(manager);
            console.log(`\nManager ${manager.getName()} was added!\n`);
        }
        else{
            console.log("An invalid email was entered. Fix it above.");
        }
    })
    await menuCall();
    console.log("\nGenerating HTML file")
    console.log("\t...\n\t...\n\t...");
    generateHTML();
    console.log("File generated!");
    console.log("Open the index.html file in 'dist' folder to view your team's profiles");
}

const menuCall = async function(){
    while(await menu()){};
}

login();