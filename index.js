const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')


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
      console.log('error')
    })
}

function engineerOrIntern () {
  inquirer.prompt([{
    type: 'list',
    message: 'Do u want to add a Engineer or Intern?',
    choices: ['engineer', 'intern'],
    name: 'role'
  }])
  .then(answer => {
    var { role } = answer;
    if(role === 'engineer') {
      engineerQuestion()
    }else {
      //do something
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

})
}

init()



