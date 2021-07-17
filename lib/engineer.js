const Employee = require('./employee')

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github;
  }
  getGithub() {
    return this.github
  }
  getRole () {
    return 'Engineer';
  }

}

// var test = new Engineer('eddie', 5, 'email@email.com', 'githubnamename');
// console.log('test --->', test.getRole())

module.exports = Engineer;