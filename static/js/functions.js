const setTask = (storage, task) => {
    storage.setItem(task.id, JSON.stringify(task));
    clearField();
}

const loadTasks = (storage, parentNode, taskN, parentNodeDone, taskNDone) => {
    let keys = Object.keys(storage).sort(function(a, b){return a - b});
    keys = keys.map(parseToInt);

    if(keys.length > 0){
        key = keys[keys.length -1];
        key++;
    }else{
        key = 1;
    }

    for(aux of keys){
        let task = JSON.parse(storage.getItem(aux));
        if(task.done === false){
            createTask(storage, task, parentNode, taskN, parentNodeDone, taskNDone);
        }else{
            createTaskDone(storage, task, parentNode, taskN, parentNodeDone, taskNDone);
        }
    }
}

const loadTask = (storage, task, parentNode, taskN, parentNodeDone, taskNDone) =>{
    createTask(storage, task, parentNode, taskN, parentNodeDone, taskNDone);
}

const clearField = () => {
    taskTitle.value = '';
    taskDesc.value = '';
    taskDate.value = '';
}

function parseToInt(str){
    return parseInt(str);
}

const countTask = (storage, boolean) => {
    let result = 0;
    let keys = Object.keys(storage).sort(function(a, b){return a - b});
    for(aux of keys){
        let task = JSON.parse(storage.getItem(aux));
        if(task.done === boolean){
            result++;
        }
    }
    return result;
}

function clearEvents() {
    while(cal.getEvents.length > 0) {
        cal.removeEvent(cal.getEvents[0]);
    }
}