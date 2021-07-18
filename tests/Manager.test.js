const Manager = require('../lib/Manager')
const Employee = require('../lib/Employee')

describe('Manager', () => {

  it('Check Manager class to be instance of Employee Class', () => {
    const newEmployee = new Manager();
    expect(newEmployee).toBeInstanceOf(Employee)
  })

  it('Can create Manager object', () => {
    const newEmployee = new Manager()
    expect(typeof newEmployee).toEqual('object')
  })

  it('Can create Manager class', () => {
    const newEmployee = new Manager()
    expect(typeof newEmployee).toEqual('object')
  })

  it('Can create Manager class with name', () => {
    const newEmployee = new Manager('Eddie');
    expect(newEmployee.name).toEqual('Eddie')
  })

  it('Can create Manager class with id', () => {
    const newEmployee = new Manager('Eddie', 1);
    expect(newEmployee.id).toEqual(1)
  })

  it('Can create Manager class with email', () => {
    const newEmployee = new Manager('Eddie', 1, 'email@email.com');
    expect(newEmployee.email).toEqual('email@email.com')
  })

  it('Can create Manager class with office number', () => {
    const newEmployee = new Manager('Eddie', 1, 'email@email.com', 33);
    expect(newEmployee.officeNumber).toEqual(33)
  })

  it('Can get name from getName function', () => {
    const newEmployee = new Manager('Eddie');
    expect(newEmployee.getName()).toEqual('Eddie')
  })

  it('Can get ID from getId function', () => {
    const newEmployee = new Manager('Eddie',1);
    expect(newEmployee.getId()).toEqual(1)
  })

  it('Can get email from getEmail function', () => {
    const newEmployee = new Manager('Eddie',1, 'email@email.com');
    expect(newEmployee.getEmail()).toEqual('email@email.com')
  })

  it('Can get name from getRole() function', () => {
    const newEmployee = new Manager();
    expect(newEmployee.getRole()).toEqual('Manager')
  })

})