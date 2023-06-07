const createTask = (storage, task, parentNode, taskN, parentNodeDone, taskNDone) => {
    let divTask = document.createElement('div');
    let divTitle = document.createElement('div');
    let titleTask = document.createElement('p');
    let divDesc = document.createElement('div');
    let descTask = document.createElement('p');
    let divBottom = document.createElement('div');
    let divDateTask = document.createElement('div');
    let divBtnDone = document.createElement('div');
    let dateTask = document.createElement('p');
    let btnRemoveTask = document.createElement('span');
    let btnEditTask = document.createElement('span');
    let btnDoneTask = document.createElement('span');

    dateEvent = new Date(task.date);
    let event = {
        title: task.title.toString(),
        start: new Date(dateEvent.getFullYear(), dateEvent.getMonth(), dateEvent.getDate()),
        end: new Date(dateEvent.getFullYear(), dateEvent.getMonth(), dateEvent.getDate()),
    };

    titleTask.innerHTML = task.title;
    descTask.innerHTML = task.description;
    dateTask.innerHTML = task.date;
    btnRemoveTask.innerHTML = 'delete';
    btnEditTask.innerHTML = 'edit';
    btnDoneTask.innerHTML = 'done';

    divTask.classList.add('task', 'scale-up-center');
    divTitle.classList.add('titleTask');
    divDesc.classList.add('descTask');
    divBottom.classList.add('bottomTask');
    divDateTask.classList.add('dateTask');
    divBtnDone.classList.add('btn-done-Task');
    btnRemoveTask.classList.add('material-symbols-outlined');
    btnEditTask.classList.add('material-symbols-outlined');
    btnDoneTask.classList.add('material-symbols-outlined');

    btnRemoveTask.onclick = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                storage.removeItem(task.id);
                divTask.remove();
                taskN.innerHTML = countTask(storage, false);
                cal.removeEvent(event);
            }
        })
    }

    btnDoneTask.onclick = () => {
        task.done = true;
        storage.setItem(task.id, JSON.stringify(task));
        divTask.remove();
        taskN.innerHTML = countTask(storage, false);
        taskNDone.innerHTML = countTask(storage, true);
        createTaskDone(storage, task, parentNode, taskN, parentNodeDone, taskNDone);
        cal.removeEvent(event);
    }

    btnEditTask.onclick = () => {
        taskTitle.value = task.title;
        taskDesc.value = task.description;
        taskDate.value = task.date;
        keyUpdated = task.id;
        showUpdateTask();
    }

    divTask.appendChild(divTitle);
    divTask.appendChild(divDesc);
    divTask.appendChild(divBottom);
    divTitle.appendChild(titleTask);
    divDesc.appendChild(descTask);
    divBottom.appendChild(divDateTask);
    divBottom.appendChild(divBtnDone);
    divDateTask.appendChild(dateTask);
    divBtnDone.appendChild(btnRemoveTask);
    divBtnDone.appendChild(btnEditTask);
    divBtnDone.appendChild(btnDoneTask);
    parentNode.appendChild(divTask);

    cal.addEvent(event);
}

const createTaskDone = (storage, task, parentNode, taskN, parentNodeDone, taskNDone) => {
    let divTask = document.createElement('div');
    let divTitle = document.createElement('div');
    let titleTask = document.createElement('p');
    let divDesc = document.createElement('div');
    let descTask = document.createElement('p');
    let divBottom = document.createElement('div');
    let divDateTask = document.createElement('div');
    let divBtnDone = document.createElement('div');
    let dateTask = document.createElement('p');
    let btnRemoveTask = document.createElement('span');
    let btnCancelTask = document.createElement('span');

    dateEvent = new Date(task.date);
    let event = {
        title: task.title.toString(),
        color: '#00ff00',
        start: new Date(dateEvent.getFullYear(), dateEvent.getMonth(), dateEvent.getDate()),
        end: new Date(dateEvent.getFullYear(), dateEvent.getMonth(), dateEvent.getDate()),
    };

    titleTask.innerHTML = task.title;
    descTask.innerHTML = task.description;
    dateTask.innerHTML = task.date;
    btnRemoveTask.innerHTML = 'delete';
    btnCancelTask.innerHTML = 'close';

    divTask.classList.add('task', 'scale-up-center');
    divTitle.classList.add('titleTask');
    divDesc.classList.add('descTask');
    divBottom.classList.add('bottomTask');
    divDateTask.classList.add('dateTask');
    divBtnDone.classList.add('btn-done-Task');
    btnRemoveTask.classList.add('material-symbols-outlined');
    btnCancelTask.classList.add('material-symbols-outlined');

    btnRemoveTask.onclick = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                storage.removeItem(task.id);
                divTask.remove();
                taskNDone.innerHTML = countTask(storage, true);
                cal.removeEvent(event);
            }
        })
    }

    btnCancelTask.onclick = () => {
        task.done = false;
        storage.setItem(task.id, JSON.stringify(task));
        divTask.remove();
        taskN.innerHTML = countTask(storage, false);
        taskNDone.innerHTML = countTask(storage, true);
        createTask(storage, task, parentNode, taskN, parentNodeDone, taskNDone);
        cal.removeEvent(event);
    }

    divTask.appendChild(divTitle);
    divTask.appendChild(divDesc);
    divTask.appendChild(divBottom);
    divTitle.appendChild(titleTask);
    divDesc.appendChild(descTask);
    divBottom.appendChild(divDateTask);
    divBottom.appendChild(divBtnDone);
    divDateTask.appendChild(dateTask);
    divBtnDone.appendChild(btnRemoveTask);
    divBtnDone.appendChild(btnCancelTask);
    parentNodeDone.appendChild(divTask);

    cal.addEvent(event);
}