// Module Pattern
const TodoApp = (() => {

    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    // Create Task Element
    const createTaskElement = (taskText) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div>
                <button class="complete-btn">✔</button>
                <button class="delete-btn">✖</button>
            </div>
        `;

        return li;
    };

    // Add Task
    const addTask = () => {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);

        taskInput.value = "";
    };

    // Handle List Clicks (Event Delegation)
    const handleTaskActions = (event) => {
        const target = event.target;

        if (target.classList.contains("delete-btn")) {
            target.closest("li").remove();
        }

        if (target.classList.contains("complete-btn")) {
            const taskText = target.closest("li").querySelector(".task-text");
            taskText.classList.toggle("completed");
        }
    };

    // Initialize App
    const init = () => {
        addBtn.addEventListener("click", addTask);

        // EVENT DELEGATION HERE
        taskList.addEventListener("click", handleTaskActions);
    };

    return { init };

})();

// Start Application
TodoApp.init();