

function MakeToDOCard(todo){
    const toDoCard = document.createElement('div')
    const toDoTitle = document.createElement('div')
    const toDoDescription = document.createElement('div')
    const toDoDueDate = document.createElement('div')
    const toDoPriority = document.createElement('div')


    toDoTitle.innerHTML = todo.getTitle()
    toDoDescription.innerHTML = todo.getDescription()
    toDoDueDate.innerHTML = todo.getDueDate()
    toDoPriority.innerHTML = todo.getPriority()

    toDoCard.appendChild(toDoTitle)
    toDoCard.appendChild(toDoDescription)
    toDoCard.appendChild(toDoDueDate)
    toDoCard.appendChild(toDoPriority)

    return toDoCard

}

export default MakeToDOCard