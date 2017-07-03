// Interface to define the structure of Todo
interface ITodo{
    name:string;
    description: string;
    completed: boolean;
}

//Class Implementing the interface
class Todo implements ITodo{
    constructor(public name: string, public description: string, public completed: boolean){}

}

// Class which contains list of Todos and the actions
class TodoList{
    public static allTodos: Todo[]= new Array;

    //Create a new Todo Item
    createTodoItem(name:string,description:string):number {
        let newItem = new Todo(name,description, false);
        let totalCount: number = TodoList.allTodos.push(newItem);
        return totalCount;
    }

    // returns all the todos
    allTodoItems():Todo[]{
        return TodoList.allTodos;
    }
}

// window.onload is a pure JS
window.onload = function(){
    //HTMLInput Element for Task and description
    let task= <HTMLInputElement>document.getElementById("todoName");
    let description = <HTMLInputElement>document.getElementById("todoDescription");

    // added a event listner for add click
    document.getElementById("add").addEventListener('click',()=>toAlltask(task.value, description.value));    
}

//Function called when add is clicked
function toAlltask(task:string, description:string){

    let todo = new TodoList();
    // adds the task to list
    todo.createTodoItem(task, description);

    //Fetched the updated list and create a list item for UI
    let div = <HTMLDivElement>document.getElementById("todoList");
    let list="<dl class='dl-horizontal'>";

    for(let index=0; index < TodoList.allTodos.length;index++){
        list = list + " <dt> " + TodoList.allTodos[index].name + ' </dt> <dd>' + TodoList.allTodos[index].description + '</dd>';
    }
    list += "</dl>"
    div.innerHTML = list;

    //Casting
    (<HTMLInputElement>document.getElementById("todoName")).value = "";

    (<HTMLInputElement>document.getElementById("todoDescription")).value="";
    
}