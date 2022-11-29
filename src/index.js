const form = document.querySelector('#create-task-form');
const taskDescription = document.querySelector('#new-task-description');
const h2 = document.querySelector('h2')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  createToDo();
  form.reset();
});

createToDo = () => {
  const taskDiv = document.createElement('div');
  const checkBox = document.createElement('input');
  const label = document.createElement('label');
  const bttn = document.createElement('button');

  taskDiv.setAttribute('id', 'task')
  checkBox.setAttribute("type", "checkbox");
  bttn.setAttribute('class', 'deleteBttn');
  bttn.textContent = 'x';
  bttn.addEventListener('click', handleDelete);

  label.appendChild(document.createTextNode(taskDescription.value));
  taskDiv.appendChild(checkBox);
  taskDiv.appendChild(label);
  taskDiv.appendChild(bttn);

  document.querySelector('#tasks').appendChild(taskDiv);
}

handleDelete = (e) => {
  e.target.parentNode.remove();
}


// Notes:
// -click to change title 
// -click to add task 
// -justify items (delete button on right)