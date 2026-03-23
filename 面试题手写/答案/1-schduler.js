class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.running = 0;
    this.queue = [];
  }

  add(task) {
    return new Promise((resolve, reject) => {
      // 包装任务和对应的 resolve/reject
      this.queue.push({ task, resolve, reject });
      this.run();
    });
  }

  run() {
    // 只要有空位且队列不空就启动任务
    while (this.running < this.limit && this.queue.length) {
      const { task, resolve, reject } = this.queue.shift();
      this.running++;
      task()
        .then((result) => {
          resolve(result);
        })
        .catch(reject)
        .finally(() => {
          this.running--;
          this.run();
        });
    }
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