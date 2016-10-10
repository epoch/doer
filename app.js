console.log('this is the app.js');

var addBtn = document.querySelector('#add-btn');
var newTodoInput = document.querySelector('#new-todo-input');
var todoList = document.querySelector('#todo-list');

var addTodo = function() {
  var newTodoContent = newTodoInput.value;
  var newLI = document.createElement('li');
  var newContent = document.createTextNode(newTodoContent);
  newLI.appendChild(newContent);
  todoList.appendChild(newLI);
  newTodoInput.value = ''; // clearing the input
}

addBtn.addEventListener('click', addTodo);

todoList.addEventListener('click', function(event) {
  console.log('someone click on you or on your children');
  console.log(event.target);

  if (event.target.tagName === 'LI') {
    event.target.className = 'done';
  }
})

