import todopage from "./todopage"
import showTodo from "./showTodo"

export const project = (name) => {
    let toDos = []
    
    const getName = () => name
    const getToDos = () => toDos

    const selected = false


    function addToDo(todo){
        toDos.push(todo)
    }

    function removeToDo(index) {
        toDos.splice(index, 1)
      }

    return {getName, getToDos, addToDo, removeToDo, selected}
    
}   

export function renderProjects(projectsArray) {
    const right = document.getElementById('right')
    const btn = document.getElementById('todobtndiv')
    const todosDiv = document.getElementById('todosdiv')
    const projectsDiv = document.createElement('div')
    projectsDiv.id = 'projects'
    let selectedProject = null
  
    projectsArray.forEach((element) => {
      const projectDiv = document.createElement('div')
      projectDiv.innerHTML = element.getName();
      projectDiv.classList.add('project')
      projectDiv.addEventListener('click', () => {
        if (selectedProject !== element) {
          if (selectedProject !== null) {
            selectedProject.selected = false
          }
          element.selected = true
          selectedProject = element
          projectDiv.id = 'selected'
          console.log(`${element.getName()} S: true`)
          console.log(`Selected: ${selectedProject.getName()}`)
          todosDiv.innerHTML = ''
          btn.innerHTML = ''
          btn.appendChild(todopage(selectedProject))
          todosDiv.appendChild(showTodo(selectedProject))
        }
      })
      projectsDiv.appendChild(projectDiv)
    })
    return projectsDiv
  }