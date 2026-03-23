// 字符串格式化

// 1. 千分位格式化（保留两位小数）
function formatThousands(num) {
  // TODO: 实现千分位格式化
}

// 2. 驼峰转换
function toCamelCase(str) {
  // TODO: 驼峰命名转换
}

// 3. 下划线转驼峰
function underscoreToCamel(str) {
  // TODO: 下划线转驼峰
}

// 4. 隐藏手机号中间4位
function maskPhone(phone) {
  // TODO: 手机号脱敏
}

// 5. 字符串模板解析
function render(template, data) {
  // TODO: 实现 {{name}} 模板解析
}

// 测试
console.log('--- 千分位格式化 ---');
console.log(formatThousands(1234567.89)); // 1,234,567.89
console.log(formatThousands(1000000)); // 1,000,000
console.log(formatThousands(1234)); // 1,234

console.log('\n--- 驼峰转换 ---');
console.log(toCamelCase('hello-world')); // helloWorld
console.log(toCamelCase('foo_bar_baz')); // fooBarBaz

console.log('\n--- 下划线转驼峰 ---');
console.log(underscoreToCamel('user_name')); // userName
console.log(underscoreToCamel('get_user_info_by_id')); // getUserInfoById

console.log('\n--- 手机号脱敏 ---');
console.log(maskPhone('13812345678')); // 138****5678

console.log('\n--- 模板解析 ---');
const tmpl = 'Hello, {{name}}! You are {{age}} years old.';
console.log(render(tmpl, { name: '张三', age: 25 }));
// Hello, 张三! You are 25 years old.
