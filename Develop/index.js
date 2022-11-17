// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const { writeFile } = require("../Develop/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt ([

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
                        

                    },
//Question #8 Github Username 
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
   
//Question #9 Email 
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
                
 ]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    promptUser().then((data) => {
        writeFile(data);
    });
}

// Function call to initialize app
init();
