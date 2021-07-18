const Engineer = require('../lib/Engineer')
const Employee = require('../lib/Employee')

describe('Engineer', () => {

  it('Check Engineer class to be instance of Employee Class', () => {
    const newEmployee = new Engineer();
    expect(newEmployee).toBeInstanceOf(Employee)
  })

  it('Can create Engineer object', () => {
    const newEmployee = new Engineer()
    expect(typeof newEmployee).toEqual('object')
  })

  it('Can create Engineer class with name', () => {
    const newEmployee = new Engineer('Eddie');
    expect(newEmployee.name).toEqual('Eddie')
  })

  it('Can create Engineer class with id', () => {
    const newEmployee = new Engineer('Eddie', 1);
    expect(newEmployee.id).toEqual(1)
  })

  it('Can create Engineer class with email', () => {
    const newEmployee = new Engineer('Eddie', 1, 'email@email.com');
    expect(newEmployee.email).toEqual('email@email.com')
  })

  it('Can create Engineer class with Github', () => {
    const newEmployee = new Engineer('Eddie',1, 'email@email.com', 'github123');
    expect(newEmployee.github).toEqual('github123')
  })

  it('Can get name from getName function', () => {
    const newEmployee = new Engineer('Eddie',1, 'email@email.com');
    expect(newEmployee.getName()).toEqual('Eddie')
  })

  it('Can get ID from getId function', () => {
    const newEmployee = new Engineer('Eddie',1, 'email@email.com');
    expect(newEmployee.getId()).toEqual(1)
  })

  it('Can get email from getEmail function', () => {
    const newEmployee = new Engineer('Eddie',1, 'email@email.com');
    expect(newEmployee.getEmail()).toEqual('email@email.com')
  })

  it('Can get name from getRole() function', () => {
    const newEmployee = new Engineer('Eddie',1, 'email@email.com');
    expect(newEmployee.getRole()).toEqual('Engineer')
  })

  it('Can get name from getGithub() function', () => {
    const newEmployee = new Engineer('Eddie',1, 'email@email.com', 'githubtest');
    expect(newEmployee.getGithub()).toEqual('githubtest')
  })

})
