import AddTodoForm from "../forms/add-todo-form/AddTodoForm"
import TodoList from "../list/todo-list/TodoList"
import TodoListArray from "../../data/todo-list"

function TodosHome(props) {
    return (
        <div className="row"> <h1>
             Todos </h1> 
            <div className="col-6"> 
                <AddTodoForm/> 
            </div>
            <div className="col-6"> 
                <TodoList data = {TodoListArray}/>
            </div>
        </div>
        
    
    )
}

export default TodosHome;