const Employee = require('./employee')
// console.log('Employee',Employee)

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