let taskList = document.querySelector('.taskList');
let taskTitle = document.querySelector('.taskTitle');
let taskDesc = document.querySelector('.taskDesc');

let storage = window.localStorage;

let key = 1;

function addTask(){
    task = {
        id: Math.random(1, 100),
        title: taskTitle.value,
        description: taskDesc.value,
    }
    setTask(storage, task);
    loadTask(task, taskList);
}

loadTasks(storage, taskList);