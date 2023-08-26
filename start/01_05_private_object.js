// Write your code here

class Person {
  constructor(name, username, password) {
    const uname = Symbol("username");
    const pass = Symbol("password");
    this.name = name;
    this[uname] = username;
    this[pass] = password;
  }
}

const mo = new Person("Mo", "mosaleh", "p455w0rd");

console.log(Object.keys(mo));
