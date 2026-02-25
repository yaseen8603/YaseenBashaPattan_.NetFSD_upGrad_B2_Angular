let tasks = [];

const addTaskCallback = (task, callback) => {
  setTimeout(() => {
    tasks.push(task);
    callback(`Task "${task}" added.`);
  }, 1000);
};

addTaskCallback("Learn JS", message => console.log(message));