const addTask = async (task) => {
  const message = await addTaskPromise(task);
  console.log(message);
};

const listTasks = async () => {
  return `
  ---- Task List ----
  ${tasks.map((task, index) => `${index + 1}. ${task}`).join("\n")}
  `;
};

const deleteTask = async (index) => {
  tasks.splice(index, 1);
  return `Task deleted successfully.`;
};

(async () => {
  await addTask("Build Project");
  await addTask("Revise Concepts");

  console.log(await listTasks());

  await deleteTask(0);

  console.log(await listTasks());
})();