import './style.css'

import { toDo } from "./toDo"
import {project, renderProjects} from "./project"
import projectsArray from "./projectArray"



const content = document.getElementById('content')

const todo1 = toDo('name', 'description', 'duedate', 'priority')

const project1 = project('project')

project1.addToDo(todo1)

const projectsDIv = document.createElement('div')
projectsDIv.id = 'projectsdiv'

const left = document.createElement('div')
const right = document.createElement('div')

left.id = 'left'

const h1 = document.createElement('h1')
h1.innerHTML = 'To Do List'

const projectsLabel = document.createElement('label')
projectsLabel.id = 'projectslabel'
projectsLabel.htmlFor = 'projects'
projectsLabel.innerHTML = 'Projects'

const projectsList = document.createElement('div')

const projectsInput = document.createElement('input')
projectsInput.type = 'text'
projectsInput.name = 'project_name'
projectsInput.id = 'projects'

const projectsButton = document.createElement('button')
projectsButton.id = 'projectBtn'
projectsButton.innerHTML = 'Add Project'

projectsButton.addEventListener('click', () => {
    projectsList.innerHTML = ''
    projectsArray.push(project(projectsInput.value)) 
    projectsList.appendChild(renderProjects(projectsArray))
    projectsInput.value = ''
})


/* const objectButton = document.createElement('button')
objectButton.innerHTML = 'Obejct'
objectButton.addEventListener('click', () => {
    projectsArray.forEach((element) => {
        console.log(`${element.getName()} S: ${element.selected} todos: ${element.getToDos()}`)
    })
}) */



const h2 = document.createElement('h2')
h2.innerHTML = 'Tasks'

left.appendChild(h1)
left.appendChild(projectsLabel)
left.appendChild(projectsList)
left.appendChild(projectsInput)
left.appendChild(projectsButton)

const todoBtnDiv = document.createElement('div')
todoBtnDiv.id = 'todobtndiv'

const todosDiv = document.createElement('div')
todosDiv.id = 'todosdiv'


right.appendChild(todoBtnDiv)
right.appendChild(todosDiv)

right.id = 'right'

content.appendChild(left)
content.appendChild(right)