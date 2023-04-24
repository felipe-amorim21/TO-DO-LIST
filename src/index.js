import toDo from "./toDo"
import MakeToDOCard from "./MakeToDoCard"
import taskform from "./taskForm"
import project from "./project"

const content = document.getElementById('content')
const left = document.createElement('div')
const right = document.createElement('div')

const h1 = document.createElement('h1')
h1.innerHTML = 'To Do List'

const projectsLabel = document.createElement('label')
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
    project(projectsInput.value)
})

const h2 = document.createElement('h2')
h2.innerHTML = 'Tasks'

left.appendChild(h1)
left.appendChild(projectsLabel)
left.appendChild(projectsInput)
left.appendChild(projectsButton)



content.appendChild(left)
