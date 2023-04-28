import { toDo } from "./toDo"
import projectsArray from "./projectArray"
import MakeToDOCard from "./MakeToDoCard"
import showTodo from "./showTodo"

function taskform(project){

    const formContainer = document.createElement('div')
    const taskForm = document.createElement('form')
    const taskFieldset = document.createElement('fieldset')
    const titleLable = document.createElement('label')
    const titleInput = document.createElement('input')
    const descriptionLable = document.createElement('label')
    const descriptionInput = document.createElement('textarea')
    const dueDateLable = document.createElement('label')
    const dueDateInput = document.createElement('input')
    const priorityLable = document.createElement('label')
    const prioritySelect = document.createElement('select')
    const formbutton = document.createElement('button')

    titleLable.htmlFor = 'title'
    titleLable.innerHTML = 'Task Name:'
    titleInput.type = 'text'
    titleInput.name = 'task_title'
    titleInput.id = 'title'

    dueDateLable.htmlFor = 'due_date'
    dueDateLable.innerHTML = 'Due date: '
    dueDateInput.type = 'date'
    dueDateInput.name = 'due_date'
    dueDateInput.id = 'due_date'

    priorityLable.htmlFor = 'priority'
    priorityLable.innerHTML = 'Priority'
    prioritySelect.name = 'priority'
    prioritySelect.id = 'priority'

    const options = ["High", "Medium", "Low"];

    for (let i = 0; i < options.length; i += 1) {
        const option = document.createElement('option')
        option.text = options[i]
        option.value = options[i]
        prioritySelect.appendChild(option)
    }

    descriptionLable.htmlFor = 'description'
    descriptionLable.innerHTML = 'Description'
    descriptionInput.name = 'description'
    descriptionInput.id = 'description'
    descriptionInput.cols = 30
    descriptionInput.rows = 6

    const todosDiv = document.getElementById('todosdiv')

    formbutton.id = "formbutton"
    formbutton.innerHTML = "Create todo"
    formbutton.addEventListener('click', (e) => {
        todosDiv.innerHTML = ''
        const container = document.getElementById('formdiv')
        const todo = toDo(titleInput.value, descriptionInput.value, dueDateInput.value, prioritySelect.value)
        project.addToDo(todo)
        todosDiv.appendChild(showTodo(project))
        container.removeChild(container.children[1])
        e.preventDefault()
    })

    
    taskFieldset.appendChild(titleLable)
    taskFieldset.appendChild(titleInput)
    taskFieldset.appendChild(dueDateLable)
    taskFieldset.appendChild(dueDateInput)
    taskFieldset.appendChild(priorityLable)
    taskFieldset.appendChild(prioritySelect)
    taskFieldset.appendChild(descriptionLable)
    taskFieldset.appendChild(descriptionInput)
    taskFieldset.appendChild(formbutton)
    taskForm.appendChild(taskFieldset)
    formContainer.appendChild(taskForm)

    return formContainer

}


export default taskform

