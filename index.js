const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const headerTemplate = require('./template/headerTemplate')
const endTemplate = require('./template/endTemplate')



const employees = [];
var initQuestions = [
  {
    message: `Please enter team manager's name`,
    name:'name'
  },
  {
    message: 'Please enter employee ID',
    name: 'id'
  },
  {
    message: 'Please enter email address',
    name: 'email'
  },
  {
    message: 'Please enter office number',
    name: 'officeName'
  }
]

var addMoreQuestion = [
  {
    type: 'list',
    message: 'Do u want to add a Engineer or Intern?',
    choices: ['engineer', 'intern'],
    name: 'role'
  }
]

function init() {
  inquirer.prompt(initQuestions)
    .then(answers => {
      console.log('answers', answers)
      var {name, id, email, officeName} = answers
      var employee = new Manager(name, id, email, officeName)
      employees.push(employee)
      engineerOrIntern();
    })
    .catch(error => {
      console.log('error', error)
    })
}

function engineerOrIntern () {
  console.log('employees----->', employees)
  inquirer.prompt([{
    type: 'list',
    message: 'Engineer or Intern?',
    choices: ['engineer', 'intern'],
    name: 'role'
  }])
  .then(answer => {
    var { role } = answer;
    if(role === 'engineer') {
      engineerQuestion()
    }else {
      internQuestion()
    }
  })
}

function engineerQuestion() {
  inquirer.prompt([{
    message: 'What is your name?',
    name: 'name'
  },
  {
    message: 'what is your ID?',
    name: 'id'
  },
  {
    message: 'What is your Email?',
    name: 'email'
  },
  {
    message: 'What is your Github?',
    name: 'github'
  },
  {
    message: 'Do you want to add more Engineer or Intern?',
    name: 'addmore',
    type: 'list',
    choices: ['Yes', 'No']
  }
]).then(answers => {
  var {name, id, email, github, addmore} = answers;
  var engineer = new Engineer(name, id, email, github);
  employees.push(engineer);
  if(addmore === 'Yes') {
    engineerOrIntern()
  } else {
    //loop the array
  }

})
}

function internQuestion() {
  inquirer.prompt([{
    message: 'What is your name?',
    name: 'name'
  },
  {
    message: 'what is your ID?',
    name: 'id'
  },
  {
    message: 'What is your Email?',
    name: 'email'
  },
  {
    message: 'What is your School?',
    name: 'school'
  },
  {
    message: 'Do you want to add more Engineer or Intern?',
    name: 'addmore',
    type: 'list',
    choices: ['Yes', 'No']
  }
]).then(answers => {
  var {name, id, email, school, addmore} = answers;
  var intern = new Intern(name, id, email, school);
  employees.push(intern);
  if(addmore === 'Yes') {
    engineerOrIntern()
  } else {
    //loop the array
  }
})
}

function renderhtml () {
  employees
}

init()



