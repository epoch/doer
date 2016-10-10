console.log('this is the app.js');

var addBtn = document.getElementById('add-btn');
var newTodoInput = document.getElementById('new-todo-input');
var todoList = document.getElementById('todo-list');

var addTodo = function() {
  var newTodoContent = newTodoInput.value;
  var newLI = document.createElement('li');
  var newContent = document.createTextNode(newTodoContent);
  newLI.appendChild(newContent);

  newLI.addEventListener('click', function(event) {
    // console.log(event.target);
    event.target.className = 'done';
  });

  todoList.appendChild(newLI);
  newTodoInput.value = ''; // clearing the input
}


addBtn.addEventListener('click', addTodo);

var listItems = document.getElementsByTagName('li');

// for (var i = 0; i < listItems.length; i++) {

// }