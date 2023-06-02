let taskList = document.querySelector('.parentNode');
let taskTitle = document.querySelector('.taskTitle');
let taskDesc = document.querySelector('.taskDesc');
let taskDate = document.querySelector('.taskDate');
let taskN = document.querySelector('.taskN');

let taskListDone = document.querySelector('.parentNodeDone');
let taskNDone = document.querySelector('.taskNDone');

let taskTemplate = document.querySelector('.taskTemplate')
let btnShowAddTask = document.querySelector('.showAddTask');
let btnCancelAddTask = document.querySelector('.cancelAddTask');
let btnAddTask = document.querySelector('.addTask');

let storage = window.localStorage;

let key;

function addTask(){
    task = {
        id: key,
        title: taskTitle.value,
        description: taskDesc.value,
        date: taskDate.value,
        done: false,
    }
    setTask(storage, task);
    loadTask(storage, task, taskList, taskN, taskListDone, taskNDone);
    taskN.innerHTML = countTask(storage, false);
    key++;
    cancelAddTask();
}

taskN.innerHTML = countTask(storage, false);
taskNDone.innerHTML = countTask(storage, true);
loadTasks(storage, taskList, taskN, taskListDone, taskNDone);

function showAddTask() {
    btnShowAddTask.style.display = 'none';
    btnCancelAddTask.style.display = 'block';
    btnAddTask.style.display = 'block';
    taskTemplate.style.display = 'flex';
}

function cancelAddTask() {
    btnShowAddTask.style.display = 'block';
    btnCancelAddTask.style.display = 'none';
    btnAddTask.style.display = 'none';
    taskTemplate.style.display = 'none';
    clearField();
}