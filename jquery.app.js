console.log('jquery version of doer');


// $ is a naming convention
var $newTodoInput = $('#new-todo-input');
var $addBtn = $('#add-btn');
var $todoList = $('#todo-list');
var $doneList = $('#done-list');

var addTodo = function() {
  // get the value from input
  // create new LI with value
  var $newLI = $('<li>').text( $newTodoInput.val() );
  // append to existing UL
  $todoList.append( $newLI );
  // clear input field
  $newTodoInput.val('');
}

$addBtn.on('click', addTodo);

$todoList.on('click', function() {
  console.log('sdfsdfsdfsdf')
});
