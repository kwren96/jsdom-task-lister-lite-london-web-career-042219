document.addEventListener("DOMContentLoaded", () => { 
  click()
});

document.getElementById("create-task-form").elements[1].addEventListener("click", function(event){
  event.preventDefault()
  createNewTask()
})



function createNewTask() {
  const tasks = document.getElementById('tasks')
  let newElement = document.createElement('li')
  tasks.appendChild(newElement)
  let newTask = document.getElementById('new-task-description').value
  newElement.innerHTML = newTask
}

