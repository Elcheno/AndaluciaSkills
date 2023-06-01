const setTask = (storage, task) => {
    storage.setItem(task.id, JSON.stringify(task));
    clearField();
}

const loadTasks = (storage, parentNode) => {
    let keys = Object.keys(storage);
    console.log(keys);

    for(key of keys){
        let task = JSON.parse(storage.getItem(key));
        createTask(task, parentNode)
    }
}

const loadTask = (task, parentNode) =>{
    createTask(task, parentNode);
}

const createTask = (task, parentNode) => {
    let divTask = document.createElement('div');
    let divTitle = document.createElement('div');
    let titleTask = document.createElement('p');

    titleTask.innerHTML = task.title;

    divTask.classList.add('task');
    divTitle.classList.add('titleTask');

    divTask.appendChild(divTitle);
    divTitle.appendChild(titleTask);
    parentNode.appendChild(divTask);
}

const clearField = () => {
    taskTitle.value = '';
    taskDesc.value = '';
}