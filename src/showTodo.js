import MakeToDOCard from "./MakeToDoCard";

function showTodo(project){
    const todos = project.getToDos()
    const todosDiv = document.createElement('div')
    todos.forEach((todo) => {
        const todoDiv = document.createElement('div')
        todoDiv.innerHTML = todo.getTitle()
        todosDiv.appendChild(todoDiv)
      })

    return todosDiv
}

export default showTodo