const Employee = require('./employee')

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email)
    this.school = school;
  }
  getSchool () {
    return this.school;
  }
  getRole () {
    return 'Intern'
  }

}

module.exports = Intern;
// var test = new Intern('eddie', 123, 'acb@mail.com', 'ucb')
// console.log('test--->', test.getRole())