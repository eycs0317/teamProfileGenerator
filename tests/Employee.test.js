const Employee = require('../lib/Employee')


describe('Employee', () => {

  it('Can create Employee class', () => {
    const newEmployee = new Employee()
    expect(typeof newEmployee).toEqual('object')
  })

  it('Can create Employee class with name', () => {
    const newEmployee = new Employee('Eddie');
    expect(newEmployee.name).toEqual('Eddie')
  })

  it('Can create Employee class with id', () => {
    const newEmployee = new Employee('Eddie', 1);
    expect(newEmployee.id).toEqual(1)
  })

  it('Can create Employee class with email', () => {
    const newEmployee = new Employee('Eddie',1, 'email@email.com');
    expect(newEmployee.email).toEqual('email@email.com')
  })

  it('Can get name from getName function', () => {
    const newEmployee = new Employee('Eddie',1, 'email@email.com');
    expect(newEmployee.getName()).toEqual('Eddie')
  })

  it('Can get ID from getId function', () => {
    const newEmployee = new Employee('Eddie',1, 'email@email.com');
    expect(newEmployee.getId()).toEqual(1)
  })

  it('Can get email from getEmail function', () => {
    const newEmployee = new Employee('Eddie',1, 'email@email.com');
    expect(newEmployee.getEmail()).toEqual('email@email.com')
  })

  it('Can get name from getRole() function', () => {
    const newEmployee = new Employee('Eddie',1, 'email@email.com');
    expect(newEmployee.getRole()).toEqual('Employee')
  })

})

