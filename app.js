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

  if (event.target.tagName === 'LI') {

    // find out the text in the LI that the user clicked on

    // create new LI elemenent with the text
    var doneLI = document.createElement('li');
    doneLI.className = 'done';
    var newContent = document.createTextNode(event.target.textContent);
    doneLI.appendChild(newContent);    

    // append it to done-list
    document.querySelector('#done-list').appendChild(doneLI);

    // remove the orig LI or the LI that the user clicked on
    todoList.removeChild(event.target);

  }
})

