document.addEventListener("DOMContentLoaded", () => { 
});

let priority = "high"

let prioritySelect = "desc"

document.getElementById("create-task-form").elements[1].addEventListener("change", function(event){
  priority = event.target.value
})

document.getElementById("create-task-form").elements[2].addEventListener("click", function(event){
  event.preventDefault()
  createNewTask()
})

const list = document.getElementById("list")

list.querySelector('select').addEventListener("change", function(event){
  prioritySelect = event.target.value
  sortByPriority()
})

function createNewTask() {
  let newTask = document.getElementById('new-task-description').value
  if (newTask == "") {}
  else {
  const tasks = document.getElementById('tasks')
  let newElement = document.createElement('li')
  let deleteButton = document.createElement("span")
  deleteButton.setAttribute('id', newTask)
  deleteButton.innerHTML = "X"
  deleteButton.addEventListener('click', function del(){
    tasks.removeChild(newElement)
    tasks.removeChild(deleteButton)
  })
  tasks.appendChild(newElement) 
  tasks.appendChild(deleteButton)
  newElement.innerHTML = newTask
  if (priority == "high"){
    newElement.style.color = "red"
  }
  else if (priority == "medium") {
    newElement.style.color = "yellow"
  }
  else {
    newElement.style.color = "green"
  }

}
}

function sortByPriority() {
  
}
