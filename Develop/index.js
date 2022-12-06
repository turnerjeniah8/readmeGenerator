// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require("../Develop/utils/generateMarkdown");
// const writeFile = util.promisify(fs.writeFile);

//Links questions to readme template
const readmeTemplate = require("../Develop/readmeTemplate.js");

// TODO: Create an array of questions for user input
const questions = [

//Question #1 Project title 
        {
            type: 'input',
            message: 'What do you want your README title to be?',
            name: 'title',
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a Title");
                    return false;
                }
                },
            },

// Question #2 (README-Description)
            {
                type: 'input',
                message: 'What is the motivation for this project?',
                name: 'description',
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter your motivation for this project");
                        return false;
                    }
                    },
                },
        
//Question #3 (README-Description)
            {
                type: 'input',
                message: 'Why did you build this project?',
                name: 'description',
                validate: (nameInput) => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter a description on why you built this project ");
                        return false;
                    }
                    },
                },


//Question #4 (README-Description)
                {
                    type: 'input',
                    message: 'What problem does this solve?',
                    name: 'description',
                    validate: (nameInput) => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("Please enter a description on what problem this project solves? ");
                            return false;
                        }
                        },
                    },
                

//Question #5 (README-Description)
                {
                        type: 'input',
                        message: 'What did you learn from this project?',
                        name: 'description',
                        validate: (nameInput) => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log("Please enter a description on what you learned from this project");
                                return false;
                            }
                            },
                        },



//Question #7 License
                {
                        type: 'input',
                        message: "What licenses do you want to list?",
                        name: 'license',
                        choices: ['MIT', 'APACHE', 'GPL3', 'NONE'],

                    },
//Question #8 Install
                {
                    type: 'input',
                    name: 'installation',
                    message: "What command should be used to install your project?",
                    default: 'npm install'
                },
//Question #9 Github Username 
                {
                    type: "input",
                    name: "github",
                    message: "Enter your github username",
                    validate: (nameInput) => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("please enter your github username");
                            return false;
                        }
                    },
                },
   
//Question #10 Email 
                {
                    type: "input",
                    name: "email",
                    message: "Enter your email",
                    validate: (nameInput) => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("please enter your email");
                            return false;
                        }
                    },
                },
];
// TODO: Create a function to write README file
 function writeToFile(fileName, template, data) {
   return fs.writeFileSync(path.join(process.cwd(),fileName), template, data);
};

//function to initialize program
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        if (inquirerResponses.license === "None") {
            var template = `
            # ${inquirerResponses.title.trim()}
            
            ## Table of Contents
            * [Installation](#installation)
            
            *[Questions] (#questions)
            
            ## Installation 
            To Install, run the following command 
            \`\`\`
            ${inquirerResponses.installation.trim()}
            \`\`\`

            ## Questions 
            If you have any questions about the project or would like to contribute please email me at ${inquirerResponses.email.trim()}. You can find more of my work at ${inquirerResponses.github.trim()}.
            `
        } else {
            var template = `
            # ${inquirerResponses.title.trim()}
            
            ## Table of Contents
            * [Installation](#installation)
            
            *[Questions] (#questions)
            
            ## Installation 
            To Install, run the following command 
            \`\`\`
            ${inquirerResponses.installation.trim()}
            \`\`\`

            ## Questions 
            If you have any questions about the project or would like to contribute please email me at ${inquirerResponses.email.trim()}. You can find more of my work at ${inquirerResponses.github.trim()}.
            `
        }
        console.log ('Generating README...');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    }); 
}

// Function call to initialize app
init();
