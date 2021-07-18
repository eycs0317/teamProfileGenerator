const Employee = require('./employee')

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber;
  }
  getRole () {
    return 'Manager';
  }

}

module.exports = Manager;

// var test = new Manager('eddie', 10, 'email@email', 123)
// console.log('test', test.getRole())