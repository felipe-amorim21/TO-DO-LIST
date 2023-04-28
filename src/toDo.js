
import MakeToDOCard from "./MakeToDoCard"


export const toDo = (title, description, dueDate, priority) => {
    const getTitle = () => title
    const getDescription = () => description
    const getDueDate = () => dueDate
    const getPriority = () => priority

    return {getTitle, getDescription, getDueDate, getPriority}
    
}

export function renderTodos(todos) {
    const container = document.createElement('div')
    container.innerHTML = ""
    todos.forEach(todo => {
        container.appendChild(MakeToDOCard(todo))
  });

    return container
    
}

