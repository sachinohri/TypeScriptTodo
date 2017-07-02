interface ITodo{
    name:string;
    description: string;
    completed: boolean;
}

class Todo implements ITodo{
    constructor(public name: string, public description: string, public completed: boolean){}

}

class TodoList{
    public static allTodos: Todo[]= new Array;

    createTodoItem(name:string,description:string):number {
        let newItem = new Todo(name,description, false);
        let totalCount: number = TodoList.allTodos.push(newItem);
        return totalCount;
    }

    allTodoItems():Todo[]{
        return TodoList.allTodos;
    }
}

window.onload = function(){
    let name= <HTMLInputElement>document.getElementById("todoName");
    let description = <HTMLInputElement>document.getElementById("todoDescription");

    document.getElementById("add").addEventListener('click',()=>toAlltask(name.value, description.value));    
}
function toAlltask(name:string, description:string){
    let todo = new TodoList();
    todo.createTodoItem(name, description);

    let div = <HTMLDivElement>document.getElementById("todoList");
    let list="<dl class='dl-horizontal'>";

    for(let index=0; index < TodoList.allTodos.length;index++){
        list = list + " <dt> " + TodoList.allTodos[index].name + ' </dt> <dd>' + TodoList.allTodos[index].description + '</dd>';
    }
    list += "</dl>"
    div.innerHTML = list;

    (<HTMLInputElement>document.getElementById("todoName")).value = "";

    (<HTMLInputElement>document.getElementById("todoDescription")).value="";
    
}