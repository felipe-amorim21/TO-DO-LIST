import taskform from "./taskForm"

function todopage(project){
    const container = document.createElement('div')
    container.id = 'formdiv'
    const todoBtn = document.createElement('button')
    todoBtn.innerHTML = 'Add Task'
    todoBtn.id = "todoBtn"
    todoBtn.addEventListener('click', ()=>{
        container.appendChild(taskform(project))
    })

    container.appendChild(todoBtn)

    return container
}

export default todopage