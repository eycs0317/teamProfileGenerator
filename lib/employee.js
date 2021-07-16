class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id
  }
  getEmail() {
    return this.email
  }
  getRole() {
    return 'Employee';
  }
}

var test = new Employee('eddie',1,'abc@abc.com')
console.log('test', test.getRole())