import MakeToDOCard from "./MakeToDoCard"


function showTodo(project){
    const todos = project.getToDos()

    const todosDiv = document.createElement('div')
    todosDiv.id = 'todoscontainer'
    todos.forEach((todo) => {
        todosDiv.appendChild(MakeToDOCard(todo)) 
      })

    return todosDiv
}

export default showTodo