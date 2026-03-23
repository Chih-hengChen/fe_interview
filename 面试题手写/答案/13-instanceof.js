// 手写 instanceof
function myInstanceOf(left, right) {
  if (left === null || typeof left !== 'object') return false;
  
  let proto = Object.getPrototypeOf(left);
  const prototype = right.prototype;
  
  while (proto !== null) {
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  
  return false;
}

// 测试
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }
}

const student = new Student('张三', '高三');

console.log('student instanceof Student:', myInstanceOf(student, Student)); // true
console.log('student instanceof Person:', myInstanceOf(student, Person)); // true
console.log('student instanceof Object:', myInstanceOf(student, Object)); // true
console.log('student instanceof Array:', myInstanceOf(student, Array)); // false

console.log('\n--- 验证内置类型 ---');
console.log('[] instanceof Array:', myInstanceOf([], Array)); // true
console.log('{} instanceof Object:', myInstanceOf({}, Object)); // true
console.log('"str" instanceof String:', myInstanceOf("str", String)); // false
console.log('new String("str") instanceof String:', myInstanceOf(new String("str"), String)); // true
