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
    let divDesc = document.createElement('div');
    let descTask = document.createElement('p');
    let divBottom = document.createElement('div');
    let divDateTask = document.createElement('div');
    let divBtnDone = document.createElement('div');
    let dateTask = document.createElement('p');
    let btnTask = document.createElement('p');

    titleTask.innerHTML = task.title;
    descTask.innerHTML = task.description;
    dateTask.innerHTML = 'FECHA';
    btnTask.innerHTML = 'BUTTONS'

    divTask.classList.add('task');
    divTitle.classList.add('titleTask');
    divDesc.classList.add('descTask');
    divBottom.classList.add('bottomTask');
    divDateTask.classList.add('dateTask');
    divBtnDone.classList.add('btn-done-Task');

    divTask.appendChild(divTitle);
    divTask.appendChild(divDesc);
    divTask.appendChild(divBottom);
    divTitle.appendChild(titleTask);
    divDesc.appendChild(descTask);
    divBottom.appendChild(divDateTask);
    divBottom.appendChild(divBtnDone);
    divDateTask.appendChild(dateTask);
    divBtnDone.appendChild(btnTask);
    parentNode.appendChild(divTask);

}

const clearField = () => {
    taskTitle.value = '';
    taskDesc.value = '';
}