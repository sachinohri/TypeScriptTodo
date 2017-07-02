"use strict";
var Todo = (function () {
    function Todo(name, description, completed) {
        this.name = name;
        this.description = description;
        this.completed = completed;
    }
    return Todo;
}());
var TodoList = (function () {
    function TodoList() {
    }
    TodoList.prototype.createTodoItem = function (name, description) {
        var newItem = new Todo(name, description, false);
        var totalCount = TodoList.allTodos.push(newItem);
        return totalCount;
    };
    TodoList.prototype.allTodoItems = function () {
        return TodoList.allTodos;
    };
    return TodoList;
}());
TodoList.allTodos = new Array;
window.onload = function () {
    var name = document.getElementById("todoName");
    var description = document.getElementById("todoDescription");
    document.getElementById("add").addEventListener('click', function () { return toAlltask(name.value, description.value); });
};
function toAlltask(name, description) {
    var todo = new TodoList();
    todo.createTodoItem(name, description);
    var div = document.getElementById("todoList");
    var list = "<dl class='dl-horizontal'>";
    for (var index = 0; index < TodoList.allTodos.length; index++) {
        list = list + " <dt> " + TodoList.allTodos[index].name + ' </dt> <dd>' + TodoList.allTodos[index].description + '</dd>';
    }
    list += "</dl>";
    div.innerHTML = list;
    document.getElementById("todoName").value = "";
    document.getElementById("todoDescription").value = "";
}
//# sourceMappingURL=todo.js.map