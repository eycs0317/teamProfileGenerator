const Intern = require('../lib/Intern')
const Employee = require('../lib/Employee')

describe('Intern', () => {

  it('Check Intern class to be instance of Employee Class', () => {
    const newEmployee = new Intern();
    expect(newEmployee).toBeInstanceOf(Employee)
  })

  it('Can create Intern object', () => {
    const newEmployee = new Intern()
    expect(typeof newEmployee).toEqual('object')
  })

  it('Can create Intern class with name', () => {
    const newEmployee = new Intern('Eddie');
    expect(newEmployee.name).toEqual('Eddie')
  })

  it('Can create Intern class with id', () => {
    const newEmployee = new Intern('Eddie', 1);
    expect(newEmployee.id).toEqual(1)
  })

  it('Can create Intern class with email', () => {
    const newEmployee = new Intern('Eddie', 1, 'email@email.com');
    expect(newEmployee.email).toEqual('email@email.com')
  })

  it('Can create Intern class with school', () => {
    const newEmployee = new Intern('Eddie', 1, 'email@email.com', 'UCB');
    expect(newEmployee.school).toEqual('UCB')
  })

  it('Can get name from getName function', () => {
    const newEmployee = new Intern('Eddie');
    expect(newEmployee.getName()).toEqual('Eddie')
  })

  it('Can get ID from getId function', () => {
    const newEmployee = new Intern('Eddie',1);
    expect(newEmployee.getId()).toEqual(1)
  })

  it('Can get email from getEmail function', () => {
    const newEmployee = new Intern('Eddie',1, 'email@email.com');
    expect(newEmployee.getEmail()).toEqual('email@email.com')
  })

  it('Can get name from getSchool() function', () => {
    const newEmployee = new Intern('Eddie',1, 'email@email.com', 'UCB');
    expect(newEmployee.getSchool()).toEqual('UCB')
  })

  it('Can get name from getRole() function', () => {
    const newEmployee = new Intern();
    expect(newEmployee.getRole()).toEqual('Intern')
  })

})