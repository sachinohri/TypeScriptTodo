"use strict";
//Class Implementing the interface
var Todo = (function () {
    function Todo(name, description, completed) {
        this.name = name;
        this.description = description;
        this.completed = completed;
    }
    return Todo;
}());
// Class which contains list of Todos and the actions
var TodoList = (function () {
    function TodoList() {
    }
    //Create a new Todo Item
    TodoList.prototype.createTodoItem = function (name, description) {
        var newItem = new Todo(name, description, false);
        var totalCount = TodoList.allTodos.push(newItem);
        return totalCount;
    };
    // returns all the todos
    TodoList.prototype.allTodoItems = function () {
        return TodoList.allTodos;
    };
    return TodoList;
}());
TodoList.allTodos = new Array;
// window.onload is a pure JS
window.onload = function () {
    //HTMLInput Element for Task and description
    var task = document.getElementById("todoName");
    var description = document.getElementById("todoDescription");
    // added a event listner for add click
    document.getElementById("add").addEventListener('click', function () { return toAlltask(task.value, description.value); });
};
//Function called when add is clicked
function toAlltask(task, description) {
    var todo = new TodoList();
    // adds the task to list
    todo.createTodoItem(task, description);
    //Fetched the updated list and create a list item for UI
    var div = document.getElementById("todoList");
    var list = "<dl class='dl-horizontal'>";
    for (var index = 0; index < TodoList.allTodos.length; index++) {
        list = list + " <dt> " + TodoList.allTodos[index].name + ' </dt> <dd>' + TodoList.allTodos[index].description + '</dd>';
    }
    list += "</dl>";
    div.innerHTML = list;
    //Casting
    document.getElementById("todoName").value = "";
    document.getElementById("todoDescription").value = "";
}
//# sourceMappingURL=todo.js.map