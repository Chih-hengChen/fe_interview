class Scheduler {
  constructor(limit) {
    // TODO: 实现最大并发数控制
  }

  add(task) {
    // TODO: 添加任务，支持 Promise，返回 Promise 实例
  }
}

// 测试代码
const scheduler = new Scheduler(2);
const timeout = (time) => new Promise(r => setTimeout(r, time));
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order));
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
// 输出顺序: 2, 3, 1, 4
