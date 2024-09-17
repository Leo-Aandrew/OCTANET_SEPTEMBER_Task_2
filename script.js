document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');

            li.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;

            li.querySelector('span').addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            li.querySelector('.delete').addEventListener('click', () => {
                li.remove();
            });

            taskList.appendChild(li);
            taskInput.value = '';
        }
    });
});
