const project = (name) => {
    let toDos = []
    
    const getName = () => name
    const getToDos = () => toDos

    function addToDo(todo){
        toDos.push(todo)
    }

    function removeToDo(index) {
        toDos.splice(index, 1);
      }

      return {getName, getToDos, addToDo, removeToDo}
    
}   

export default project