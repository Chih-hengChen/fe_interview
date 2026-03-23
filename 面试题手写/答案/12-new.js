// 手写 new 操作符
function myNew(constructor, ...args) {
  const obj = Object.create(constructor.prototype);
  const result = constructor.apply(obj, args);
  return result instanceof Object ? result : obj;
}

// 测试
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, I'm ${this.name}, ${this.age} years old.`;
};

const person = myNew(Person, '张三', 25);
console.log('person:', person);
console.log('person.name:', person.name);
console.log('person.age:', person.age);
console.log('person.greet():', person.greet());
console.log('person instanceof Person:', person instanceof Person);
