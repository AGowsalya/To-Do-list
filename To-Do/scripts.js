document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    addButton.addEventListener('click', function () {
        if (taskInput.value.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = taskInput.value;
            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.classList.add('complete-btn');
            completeButton.addEventListener('click', function () {
                li.classList.toggle('completed');
            });
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', function () {
                taskList.removeChild(li);
            });

            li.appendChild(completeButton);
            li.appendChild(deleteButton);

            taskList.appendChild(li);
            taskInput.value = ''; 
        }
    });
});
