import AddTodoForm from "../forms/add-todo-form/AddTodoForm"
import TodoList from "../list/todo-list/TodoList"
import TodoListArray from "../../data/todo-list"
import { useState } from "react"

function TodosHome(props) {
    const [todoList, setTodoList] = useState(TodoListArray);
    const onTodoChange = (todo) => {};
    const onTodoAdd = (newTodo) => {
        const newList = [... todoList, newTodo];
        setTodoList(newList);
    };

    return (
        <div className="row"> <h1>
             Todos </h1> 
            <div className="col-6"> 
                <AddTodoForm onTodoAdd= {onTodoAdd}/> 
            </div>
            <div className="col-6"> 
                <TodoList data = {todoList} onTodoChange={onTodoChange}/>
            </div>
        </div>
        
    
    )
}

export default TodosHome;