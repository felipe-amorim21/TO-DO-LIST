import toDo from "./toDo"
import MakeToDOCard from "./MakeToDoCard"

const contentContainer = document.getElementById('content')

/*
contentContainer.innerHTML = page()
*/

const todo1 = toDo('Lista', 'ashdhshdshd', '21/07/2014', 3)
const div = MakeToDOCard(todo1)

contentContainer.innerHTML = div.outerHTML
